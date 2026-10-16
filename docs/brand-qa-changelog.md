# Brand-QA Pass — Changelog (2026-07-02)

Branch: `content/brand-qa-pass`. DB backup taken first: `backup-pre-brand-qa.sql.gz`
(repo root, 681K, local ddev database confirmed — not production).

**⚠️ Review required before this goes anywhere near production.** Content changes
live in the local Craft DB; deploy them by syncing content (or re-running
`scripts/apply-rewrites.php` with the payloads regenerated from `docs/rewrites/`)
— they do NOT travel with git. Template changes DO travel with git.

## What was done

### Phase 1 — Source-of-truth docs (commit `c8e9ede`)
- `docs/carried-brands.md` — whitelist derived from `lines-we-carry.twig` (31
  official lines) + the 94-item Inventory channel (16 more in-stock brands).
- `docs/brand-qa-blocklist.md` — 7 competitor retailers/domains (4 more than the
  original brief knew about: Bliss Acoustics, The Sound Choice, Riverwood
  Acoustics, Vinyl Sound Canada) + ~45 non-carried brands found in article HTML.

### Phase 2 — Audit (same commit)
- `docs/brand-qa-audit.md` — all 34 pages audited from rendered HTML. All six
  Tier-1 hub articles Critical; 19 sub-pages clean; 5 surgical fixes identified.

### Phase 3 — Rewrites (commits `00da68b`, `a06ed5d`)
Six hub articles fully rewritten (drafts with per-block mapping in
`docs/rewrites/*.md`), written into the Craft entries via the element API
(`scripts/apply-rewrites.php` — setFieldValue + saveElement, fresh revisions on
each hub entry, no SQL writes):

| Page | Craft entry | Change |
|---|---|---|
| /products/loudspeakers | 2174 | Cut "Where to Buy" (Audioshop/Capital Sound/Fleet Pro + links), retailer-brands table, PA/commercial-install/rental sections. New: carried-stock table, electrostatic-vs-dynamic, Ottawa room matching, audition guide, trade-in path. |
| /products/analogue | 2186 | Studio-gear guide (SSL/API/Neve/Neumann/Studer/Pultec, DAWs, Albini) → consumer vinyl-playback guide. Vinyl-fidelity FAQ no longer opens "No." Hero typo "cheerished"→"cherished". |
| /products/amplification | 2162 | "Brands Stocked by Ottawa Retailers" (McIntosh/Rotel/NAD/Marantz/Yamaha/Denon) + Cary Audio/Line Magnetic + HT-receiver content → carried-lines section/table + modest tube-service copy. |
| /products/digital-sources | 2200 | "Where to Audition" (Bliss + Nagra dealer link, Sound Choice, Audioshop) → audition-at-Distinctive section. Tier table rebuilt from stocked gear; Bluesound/Hi-Fi Rose/Aurender/MSB/etc. removed. |
| /products/cables-power | 2210 | Riverwood link + fabricated Unity-Audio-cables claim cut; Better Cables/Viablue/Nordost/B&W/Magnepan removed; in-house custom-cable workshop is now the flagship section; debate section rebalanced. |
| /products/racks-accessories | 2222 | What Hi-Fi + solidsteel.it links cut; tier picks rebuilt from Norstone/Tri-Art/IsoAcoustics/Black Diamond Racing; Stillpoints/Townshend peer-comparisons removed. |

Surgical content fixes (same mechanism):
- Power Amplifiers (blocks 6028/6029): Bryston 4B³ table row removed; prose
  example now Parasound Halo A 21+.
- Floorstanding Speakers (6091/6092): phantom "Audio Physic Midex / PS Audio
  Aspen FR30" specs replaced with actual stock — Audio Physics Classic 15
  (4 Ω / 89 dB / $5,700) and MartinLogan Motion F20 (4 Ω / 92 dB / $4,499).
- Speaker Stands (6130/6131): phantom Solidsteel SS-6 / Target Audio / "Custom
  Artisan" table rows replaced with Tri-Art B-Series (20″ bamboo) and Custom
  Design FS-102 (24″ steel).
- AC Power Cords (entry 2470): heroHeading "AC PowerCords" → "AC Power Cords".
- MITKIT inventory item (6366): `subcategory` now → Turntables, so the footer
  New Arrivals link resolves to /products/analogue/turntables instead of
  /products (`scripts/fix-mitkit-subcategory.php`).

### Phase 4 — Template fixes (this commit)
- `templates/_partials/footer.twig` — four dead `href="#"` social icons removed
  (no accounts exist; restore from git history when real URLs land).
- `templates/_layouts/base.twig` — empty `twitter:creator` ("@") tag suppressed
  via SEOmatic; default meta description shortened 170→148 chars (was being
  truncated to a dangling "and…").
- `templates/index.twig` — homepage meta description block, same 148-char copy.
- `templates/about.twig` — "personalised" → "personalized" (consistency).

## Final regression (all 34 rendered pages)

- Tier 1 competitors/domains: **0 hits**
- Tier 2 non-carried brands: **0 hits**
- Dead `href="#"` links: **0**
- `twitter:creator`: **absent**
- External links remaining: Google Maps directions only
- JSON-LD valid (WebPage + BreadcrumbList + Organization) on all checked pages
- All six hub articles within ±20% of original word count; FAQ counts preserved;
  every FAQ answer opens with a direct 1–2 sentence answer; every article ends
  with a book-a-demo CTA

## Accepted exceptions

- **Telefunken** appears once on /products in the Fosgate Signature phono pre's
  description — a factual list of the NOS tubes installed in that unit
  (Amperex, Brimar, EI, RCA, Siemens, Telefunken, Tung-Sol). Product attribute,
  not an endorsement. Keep.
- **Roon / Tidal / Qobuz / Spotify** — neutral streaming-service references, kept.

## Known follow-ups (not in this pass)

- FAQPage JSON-LD is not emitted anywhere despite strong FAQ content — worth
  wiring via SEOmatic or a `jsonld` block on the category template.
- The Brands category group in Craft is empty; `lines-we-carry.twig` hard-codes
  the brand list. Seed the group from `docs/carried-brands.md` when convenient.
- Interim AI product photos still flagged (see memory/product-images notes).
