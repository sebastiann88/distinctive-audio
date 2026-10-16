# Deployment Runbook — Distinctive Audio

**Target:** DigitalOcean droplet managed by **Laravel Forge**.
**Status:** Reference for the owner's separate hosting work. Nothing here is
provisioned yet. Local development continues via DDEV regardless.

Craft CMS 5 · PHP 8.3 · MySQL 8 · nginx · docroot `web/`.

---

## 0. Repo hygiene (verified)

The repo is safe to push to a Git host:

- No secrets tracked — `.env` is gitignored; `config/license.key*` is gitignored.
- The SEOmatic license key is an env reference in project config
  (`licenseKey: '$SEOMATIC_LICENSE_KEY'`); the cleartext value lives only in
  `.env` and appears in **zero** commits.
- `vendor/` and `node_modules/` are **not** tracked (built on demand).
- Committed: `composer.lock`, the compiled `web/css/style.css`, and the
  `web/images/` set (site/article/product images ship via git).

## 1. Prerequisite — Git remote (blocker)

The repo is currently **local-only**; Forge deploys from a Git provider
(GitHub). Before any deploy:

1. Create a **private** GitHub repo (it's a client project; project config is
   not secret but private is safer).
2. Push the full history (`git remote add origin … && git push -u origin main`).
3. Connect Forge → GitHub; Forge installs its own deploy key on the repo.

> Note: the `gh` CLI is not installed in the build environment, so repo
> creation + first push is an owner action (or provide a push path).

## 2. DigitalOcean + Forge provisioning

| Item | Value |
|---|---|
| Region | **TOR1 (Toronto)** — closest to Ottawa, Canadian data residency. NYC = fallback. |
| Droplet | **2 GB RAM / 1–2 vCPU** Basic (~US$14–18/mo). 1 GB is too tight for MySQL 8 + PHP-FPM. |
| OS | Ubuntu LTS (Forge default) |
| Stack | PHP 8.3, MySQL 8, nginx — provisioned by Forge |
| Site "Web Directory" | **`/web`** (Forge defaults to `/public` — must change) |
| Node | **Not needed on the server** (see §3) |

## 3. Deploy script (Forge)

```bash
cd $FORGE_SITE_PATH
git pull origin $FORGE_SITE_BRANCH
composer install --no-dev --optimize-autoloader --no-interaction
php craft up --interactive=0        # migrate/all + project-config/apply
php craft clear-caches/all
```

**Simplification:** the compiled `web/css/style.css` is committed, so there is
**no Node/npm build step on the server** — the droplet never needs Node.
Tailwind is built locally via `ddev build-css` and the output is in git.

## 4. First-deploy data seed (one-time, not part of repeat deploys)

DB content (94 inventory, 31 brands, 31 product types, 28 category entries) is
**not** in git — it's reproduced from the import commands.

- **Preferred (reproducible, no dump) — exact order:**
  1. `php craft install` (builds schema from migrations) — fresh DB only.
  2. `php craft project-config/apply` (creates the sections, entry types, fields,
     taxonomies, globals from the committed `config/project/`).
  3. `php craft distinctiveaudio/import/all` (brands + 94 inventory).
  4. `php craft distinctiveaudio/import/categories` (28 category entries:
     hero/lead/spec table/buying-guide/FAQ, from the static source in
     `/_migration`).
  All import commands are idempotent — safe to re-run.
- **Fallback:** export the local DB (`ddev export-db`) and import it into the
  droplet's MySQL. Use if the import source isn't fully self-contained on prod.

> **DANGER — never run `setup/*` against a populated database.** The
> `distinctiveaudio/setup/*` console commands BUILD the content model (field
> defs, dropdowns, Money fields, layouts). Re-running them on a DB that already
> has inventory re-saves the field definitions and **wipes existing dropdown /
> Money values** — this caused the P0 (#30: products table empty, inventory
> triplicated, availability NULL). On an existing install use **only**
> `project-config/apply` (structure) + `import/*` (content), never `setup/*`.
> Note: re-running `setup/*` also regenerates field-layout element UIDs, so it
> dirties `config/project/` even when it "works".

## 5. Production `.env` (set via the Forge env editor — never committed)

Mirrors `.env.example.production`:

```
CRAFT_APP_ID=               # set (unique)
CRAFT_ENVIRONMENT=production
CRAFT_SECURITY_KEY=         # generate fresh (php craft setup/security-key)
CRAFT_DEV_MODE=false
CRAFT_ALLOW_ADMIN_CHANGES=false   # structure changes never on prod
CRAFT_DISALLOW_ROBOTS=false       # robots ALLOWED (ties to #22)
CRAFT_DB_SERVER=127.0.0.1
CRAFT_DB_DATABASE=          # from Forge
CRAFT_DB_USER=             # from Forge
CRAFT_DB_PASSWORD=         # from Forge
SEOMATIC_LICENSE_KEY=      # real purchased key (#18)
```

Plus the purchased **Craft 5 license** (`config/license.key`, bound on first
prod boot / applied in the CP). License keys are per-install.

## 6. SSL, backups, topology

- **SSL:** Forge + Let's Encrypt (free, auto-renew) — one click once DNS
  resolves to the droplet.
- **Backups:**
  - Forge scheduled DB backups → DO Spaces / S3, daily.
  - DO droplet snapshots, weekly (paid add-on).
  - Offsite = DO Spaces for DB dumps + any post-launch asset uploads.
  - Optionally cron `php craft db/backup`.
- **Assets caveat:** the committed `web/images/` set deploys via git, but **new
  uploads via the CP** (the `images` volume → `web/images`) won't be in git —
  they need Spaces backup. Before real per-unit photos land, decide whether the
  volume stays local (committed) or moves to DO Spaces.
- **Topology (small store):** ONE 2 GB droplet with TWO Forge sites — `www`
  (prod) + `staging.<domain>` (`CRAFT_ENVIRONMENT=staging`, admin off, robots
  disallowed; already scaffolded in `.env.example.staging`). Cheapest and
  adequate for a low-traffic inquiry site; split to two droplets later if needed.

## 7. Launch sequence (incl. #16) + DNS cutover

1. Land **#16** (move static HTML → `/_migration`) + verify the **#12** 301 map
   locally → commit. #16 **activates** the legacy `/X.html` → nested 301s
   (the `.html` files stop shadowing Craft's redirect route). SEO continuity is
   the #1 launch risk — these must work before cutover.
2. Push to GitHub.
3. Provision Forge/DO, set docroot `/web`, set env, deploy.
4. First-deploy data seed (§4); verify on the Forge URL / staging subdomain
   **before** touching DNS.
5. Apply licenses (#18) + flip SEOmatic live (#22 — remove 🚧, robots indexable).
6. **DNS cutover:** lower the domain TTL ~24h ahead → point the A record at the
   droplet IP → Forge Let's Encrypt → verify → restore TTL.
7. Post-cutover verify: legacy `.html` 301s resolve to nested URLs, sitemap +
   robots, SEOmatic live, caches warm.

## 8. Owner-action checklist (Sebastian)

- [ ] Create a **private** GitHub repo (+ push history, or grant a push path).
- [ ] DigitalOcean account + billing.
- [ ] Laravel Forge account; connect Forge → DO (DO API token) and Forge → GitHub.
- [ ] Approve droplet size/region (2 GB / TOR1) + topology (1 droplet, 2 sites).
- [ ] Purchase Craft 5 + SEOmatic licenses (#18) → provide keys.
- [ ] Domain: confirm the registrar and where the current live site is hosted;
      provide DNS access or make the A-record change at cutover.
- [ ] (Recommended) DO Spaces bucket + keys for backups/offsite.
- [ ] Decide the staging subdomain name.

## 9. Open questions (owner)

- Where is the domain registered, and where is the current static site hosted?
- Repo visibility (private assumed) and who performs the first push?
- DO Spaces for backups — yes/no?

## 10. Local-dev gotcha: mutagen sync before verifying

DDEV runs in mutagen `performance_mode` — host↔container file sync is **async**.
After editing a template / Twig / config / CSS file on the host, the container
can keep serving the OLD file for a beat, so an immediate curl/browser check
reads STALE output. This repeatedly produced false "it's missing / 0 items"
reports this build, and once masked a site-down `config/general.php` fatal
(invalid `->formattingLocale()`) behind an intermittently-good render.

- Always run `ddev mutagen sync` immediately before verifying/QA-ing template or
  config changes, and before any release commit/sweep.
- `ddev build-css` already builds host-side to dodge this for compiled CSS.
- Permanent fix if it keeps biting the team: set `performance_mode: "none"`
  (or `"nfs"`) in `.ddev/config.yaml` for synchronous mounts (no lag; slower
  file I/O on macOS; requires a one-time `ddev restart`).

---

*Authored by DevOps. Deploy execution (DNS, prod env, SSL, server-side license
install) is the owner's separate hosting work — paused on the team side per
the lead (#26).*
