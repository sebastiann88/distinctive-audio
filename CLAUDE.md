# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Distinctive Audio** is a Craft CMS 5 website for a **high-end / two-channel audio store** serving the Ottawa–Gatineau region (~40 years in business, est. 1986). It is an **inquiry / showroom site**, not e-commerce: products are presented "contact-for-price" with "Enquire" / "Book a Showroom Demo" CTAs. There is **no cart and no Craft Commerce**.

The site is being **migrated from a complete static HTML/Tailwind build** (still present, see below) into Craft CMS 5. Runs on PHP 8.5 with MySQL 8.0 via DDEV. Inventory is maintained by Rhéal Nadeau. Canonical contact email: `rheal@distinctiveaudio.ca`.

> Migration status: the 34-page static site is the design/content source of truth; Craft templates and content model are being built from it. During migration the static HTML lives under `/_migration` (moved out of the docroot).

## Local Development

- Local URL: `https://distinctive-audio.ddev.site` (DDEV, nginx-fpm, PHP 8.3).
- Craft control panel trigger is set in `config/general.php` (`cpTrigger`).
- Secrets live in `.env` (not committed); `.env.example.{dev,staging,production}` document the three environments.

```bash
ddev start          # Start the local environment
ddev stop           # Stop it
ddev ssh            # Shell into the web container
ddev composer ...   # Composer inside the container
ddev build-css                # One-shot rebuild of web/css/style.css (location-independent)
cd web && ddev npm run watch  # Tailwind watch (toolchain currently in web/; relocates to root later)
cd web && ddev npm run build  # Minified production build
```

## Styling — Tailwind (compiled v3, NOT CDN)

Tailwind **v3 is compiled via the Tailwind CLI**: `src/input.css` + `tailwind.config.js` → `web/css/style.css` (committed). The interactive `@tailwindplus/elements` ESM library is loaded from CDN (mobile menu + FAQ disclosures) — a **Tailwind Plus license is held**. Do **not** drift to Tailwind v4 or a CDN-only setup.

- **Design system:** Material-3-style semantic tokens defined in `tailwind.config.js` — `bg-background`, `text-on-background`, `primary`/`primary-container`, surface ramp, `outline`, plus brand accents `accent-gold` (#f0aa10) and `accent-teal` on a deep-navy `primary` (#00263d). Named type roles (`display-lg`, `headline-lg/md`, `title-lg`, `body-lg/md`, `label-lg/md`) with `-mobile` variants. Fonts: **Newsreader** (serif display), **Manrope** (titles/body), **Inter** (UI/labels).
- **Dark mode is CUT for v1** — `darkMode: 'class'` exists but is unused; strip `dark:` classes as pages are templated.
- **CRITICAL:** `tailwind.config.js` `content` must scan `templates/**/*.twig` (not `./*.html`). If it points at `.html`, the purge wipes nearly every class once pages are Twig and the site renders unstyled. Safelist any DB-driven class names (e.g. condition pills).

## Conventions

### Code Style
- PSR-12 for PHP, `declare(strict_types=1)` in all PHP files, explicit return types.

### Modules
- Scaffold with `ddev craft make module` (Craft Generator). Namespace `modules\{modulename}`, register in `config/app.php`.
- Prefer events over direct class modification; always check element types in event handlers.
- Don't create a plugin when a module suffices.

### Commit Messages
- `type(scope): description` (e.g. `feat(twig):`, `refactor(craft):`, `style(css):`, `chore(devops):`, `fix(...):`).

### Brand QA for generated content (MANDATORY)
Any SurgeGraph or AI-generated content must pass this checklist **before** it is
integrated into entries or templates (see `docs/brand-qa-audit.md` for what
happens when it isn't — the 2026-07 pass had to strip 7 competitor links and
~45 non-carried brand endorsements):
1. **Carried brands only** in recommendations, comparisons, tables, and FAQ
   answers — whitelist: `docs/carried-brands.md` (derived from Lines We Carry +
   Inventory; keep it current). Non-carried brands only in genuinely neutral
   technology-history context; when in doubt, cut.
2. **Zero competitor mentions or links** — blocklist: `docs/brand-qa-blocklist.md`
   (Audioshop/soundsight.ca, Capital Sound, Fleet Pro, Bliss Acoustics, The Sound
   Choice, Riverwood Acoustics, Vinyl Sound Canada, plus any "where else to
   buy/audition" framing or editorial shopping links).
3. **No false first-person claims** — no studio experience, install crews,
   rentals, or manufacturing. True differentiators only: audition-first showroom
   demos, environment-first system matching, hand-built custom-terminated cables,
   trade-in program, since 1986 on Carling Avenue.
4. **Never undermine our categories** — honest, retailer-appropriate framing
   (e.g. vinyl-vs-digital: concede measurements, win on mastering/ritual/
   engagement; never a flat "No").
5. **FAQ answers open with a direct, self-contained 1–2 sentence answer**
   (the AEO payload), then elaborate.
6. **Blocklist grep must run clean** on the draft AND on the rendered page after
   integration (word-boundary grep of every blocklist name/domain; the only
   accepted exception is factual product attributes in Inventory descriptions,
   e.g. the NOS tube list in the Fosgate Signature).

## Content Model (full-CMS scope)

Resolved after pressure-testing against the real 94-row catalog. **Three taxonomies, kept separate** (do not conflate): (1) Product Categories = editorial nav/SEO pages; (2) Product Types = the catalog's filterable taxonomy; (3) Brands.

- **Singles:** Home, About, Lines We Carry, Products (catalog page chrome/intro), All-in-One Systems, Contact.
- **Structure section `Product Categories`** (2-level, native breadcrumbs) — *editorial landers only*: 6 Tier-1 (Amplification, Loudspeakers, Analogue, Digital Sources, Cables & Power, Racks & Accessories) + 22 Tier-2. One `Category Page` entry type for both tiers (level distinguishes them): fixed fields (heroHeading, leadText, heroImage) + Matrix `body` (CKEditor rich-text, spec-comparison Table, curated-products → Inventory, FAQ item). **Tier-2 pages do NOT mirror Product Types** — the two are many-to-many. The shared template auto-renders a child-category grid when `level == 1`. **URLs are NESTED under /products, mirroring the breadcrumb** (owner directive, FINAL): Tier-1 `/products/amplification`, Tier-2 `/products/amplification/integrated-amplifiers` (uriFormat `{% if level == 1 %}products/{slug}{% else %}{parent.uri}/{slug}{% endif %}`). Singles stay flat (`/about`, `/contact`, …). Internal category links use `entry.url` (a sitewide `catUrl` slug→url map in base.twig) so they auto-follow this shape. Legacy `/*.html` 301-redirect to the matching entry's `entry.url`.
- **Category group `Product Types`** (2-level, owner-editable: section parent → type child) — the catalog's source of truth, seeded from the 20 real types (3 ghost values dropped). Editable by Rhéal in the CP without a deploy. The Products table groups by this.
- **Category group `Brands`** — drives Lines We Carry and tags Inventory. Fields: logo (Assets), website (URL).
- **Channel `Inventory`** (~94 items, **null URI — no per-product detail pages**): productName (title), shortDescription, **productType** (Categories → Product Types, required), **condition** (Dropdown, fixed 7-value enum: Brand New / Almost New / Display / Floor Demo / Trade In / Consignment / Used), **availability** (Dropdown: Available / Reserved / Sold), msrp (Money CAD, required), salePrice (Money CAD, optional — cards show salePrice ?? msrp), priceUnit (Each | Pair; usually derivable from the Loudspeakers section), brand (Categories → Brands), **topology** (Dropdown: Tube / Solid-State / Hybrid — OPTIONAL, Amplification only; powers tube-vs-solid-state filtering), subcategory (Entries → Tier-2, OPTIONAL, editorial curation only), isNewArrival (Lightswitch), images (Assets, **multiple gallery, alt REQUIRED**). **Single source of truth** for the products table, New Arrivals strip, and footer New Arrivals. Interim AI photos; real per-unit photos later.
  - **Hard rule: retire stock by setting availability=Sold and/or disabling the entry — NEVER delete** (preserves curated relations + any 301'd URL). Deterministic sort: Product Type order, then title.
- **Global Sets:** Contact/NAP, Footer. SEO defaults live in SEOmatic, not a global.

The integrated-amplifiers page is the gold-standard category template (breadcrumb → navy hero + CTA → lead → spec table → curated cards → buying-guide → FAQ). One shared `productCategories/_entry.twig` serves all category pages. **Curated-product grids auto-fall-back** to a live category query + empty state when featured stock sells. Condition/availability badges use **fixed CSS classes** (not utility classes) to avoid the Tailwind purge.

## Templating

- `_layouts/base.twig` (head: fonts, `css/style.css`, `@tailwindplus/elements` CDN, blocks `content` + `jsonld`, footer include, `js/script.js`).
- `_partials/header.twig` (hard-coded primary nav — small and stable) + `footer.twig` (Products column loops the 6 Tier-1 categories; New Arrivals queries Inventory).
- No navigation plugin needed: top nav hard-coded; footer/category nav derived from the Structure section + entry queries.
- Product browsing on the Products page must be **really implemented** (server-rendered filter/search/sort via Craft element queries; the legacy static filters were non-functional). Datastar is not needed for v1.

## Immersive Homepage (Three.js/GSAP island)

The homepage (`templates/index.twig`) is a scroll-choreographed WebGL experience ported from the static immersive build. It **deliberately does NOT extend `_layouts/base.twig`**: it ships its own head/chrome and runs on the island's own Tailwind v3 build, not `/css/style.css`.

- **Source subproject:** `experience/` (Vite + Three.js + GSAP; sources in `experience/sources/`, static dev harness in `experience/site/`). Build outputs go to **`web/experience/dist/`** (committed): `experience.js` (island bundle), `experience.css` (scoped mount CSS), `site.css` (the page's Tailwind UI layer), `webgi.js` (separate product-viewer island, currently unused in Craft), DRACO decoder + models/EXR/poster under `assets/`.
- **Two byte-stable contracts** with the JS bundle — keep them and never reshape: (1) the JSON manifest in `<script data-experience-manifest>` (shape must match `experience/sources/Experience/assets.js`), (2) the `[data-experience]` mount + poster `<img>` convention.
- **Two layouts, one document:** the base layout is the static page every phone/tablet/reduced-motion/no-WebGL visitor gets (poster hero, normal flow — they never download the bundle). The choreographed layout applies only under `html.experience-on` (Tailwind `xp:` variant), added by the inline capability gate in `<head>` on desktop viewports with WebGL2.
- **Rebuild commands** (`cd experience`):
  - `npm run build:css` — REQUIRED after editing `templates/index.twig` or `_partials/footer.twig` (its content globs scan both; output `web/experience/dist/site.css`).
  - `npm run build` — rebuilds the WebGL bundle from `experience/sources/` into `web/experience/dist/`, then runs `build:css`; everything is emitted minified.
- The page-loader engine lives at the top of `web/js/script.js` (progress from images + fonts + `experience:progress`/`experience:ready` events; fires `page:revealed`). Loader styles are in the island's `site.css`.
- Debug: append `#debug` to the homepage URL for lil-gui + stats + OrbitControls.

## Craft CLI (inside `ddev ssh` or prefix with `ddev`)

```bash
craft up                      # migrate/all + project-config/apply
craft project-config/apply    # Apply project config
craft clear-caches/all        # Clear caches
craft migrate/all             # Run migrations
```

## Code Quality (for custom modules/plugins)

```bash
composer check-cs   # Check code style
composer fix-cs     # Fix code style
composer phpstan    # Static analysis
```

## Key Plugins

`craftcms/ckeditor` (rich text), `craftcms/contact-form` + `contact-form-honeypot` (contact/enquiry form), `nystudio107/craft-seomatic` (meta + JSON-LD; commercial), `putyourlightson/craft-sherlock` (security; commercial), `verbb/social-share`. Plugin budget is unlimited; a real Craft 5 license must be purchased before production (current key is a trial placeholder).

## Project Config

Structure (sections, fields, entry types, volumes, etc.) is version-controlled as YAML in `config/project/`. Develop schema locally, commit `config/project/*`, deploy, then run `craft up` per environment. Admin/structure changes are disabled on staging & production — never edit content structure there.

## Deployment

- Flow: local (DDEV) → staging → production (env values scaffolded in `.env.example.*`). Code/schema flow UP via git + project config; content flows DOWN (prod → staging → local).
- **SEO continuity is the biggest launch risk:** 301-redirect every legacy `/*.html` URL to its new pretty URL.
- Production hosting target is not yet decided (chosen before launch).
