# Article images — Loudspeaker sub-category pages

**Status (2026-06-29): FILLED.** All 15 slots below now exist in `images/articles/`. They
were populated by copying the real product/section photos already used on the interior
product pages (per request — "fetch the missing images from the interior product pages").
The mapping is in the table's "Filled from" column. These are stand-in real photos, not
bespoke ambiance shots — swap in dedicated imagery later if desired using the suggested
search terms.

**Sourcing rules (per project brief):**
- A specific *product* must use **real product photography** — never a stock photo. The
  product shots already live in `images/products/`. These article images are **ambiance /
  context only** (rooms, drivers, placement, hardware), so royalty-free stock is allowed.
- No image API key is configured in this repo (manifest-only mode). Source manually from
  Pexels, Unsplash, or Pixabay; respect each licence and record attribution below before
  publishing.
- Recommended export: ~1600px wide, JPG, optimised (the existing article JPGs run
  ~90–550 KB). Below-the-fold images already lazy-load.

| File (`images/articles/…`) | Page | Section | Suggested search terms |
|---|---|---|---|
| `floorstanding-intro.jpg` | floorstanding-speakers | Lead | floorstanding tower speakers living room hi-fi |
| `floorstanding-drivers.jpg` | floorstanding-speakers | What Makes It Different | loudspeaker driver array woofer tweeter cabinet |
| `floorstanding-room-placement.jpg` | floorstanding-speakers | How Much Room | speakers positioned away from wall listening room |
| `floorstanding-amplification.jpg` | floorstanding-speakers | Matching Amplification | integrated amplifier hi-fi rack speaker cables |
| `bookshelf-intro.jpg` | bookshelf-speakers | Lead | bookshelf speakers on stands living room |
| `bookshelf-stands.jpg` | bookshelf-speakers | Why Stands | standmount speaker on metal stand ear level |
| `bookshelf-placement.jpg` | bookshelf-speakers | Where They Fit | bookshelf speakers toed in stereo imaging |
| `electrostatic-intro.jpg` | electrostatic-panel-speakers | Lead | electrostatic panel speaker tall thin listening room |
| `electrostatic-how-it-works.jpg` | electrostatic-panel-speakers | How It Works | electrostatic stator membrane macro speaker panel |
| `electrostatic-placement.jpg` | electrostatic-panel-speakers | Wall Behind Panel | dipole panel speaker spaced from front wall |
| `subwoofers-intro.jpg` | subwoofers | Lead | subwoofer modern living room home theatre |
| `subwoofers-integration.jpg` | subwoofers | Integration | subwoofer crossover phase level controls dial |
| `stands-intro.jpg` | speaker-stands | Lead | speaker stands bookshelf speakers room |
| `stands-height.jpg` | speaker-stands | Height | tweeter ear level seated listener measuring |
| `stands-mass-fill.jpg` | speaker-stands | Sand/Shot Fill | filling speaker stand pillar with sand mass loading |

## Attribution log (fill in when images are added)

| File | Source | Photographer / page | Licence | Attribution required? |
|---|---|---|---|---|
| _(pending)_ | | | | |

## Also flagged (pre-existing, not part of this task)

- `speaker-stands.html` product cards (Solidsteel SS-6, Target Audio FS-Series, Custom
  Artisan Series) load product photos from `lh3.googleusercontent.com` (external Google
  CDN) rather than local `images/products/` files. These will break if the Google URLs
  expire. Consider downloading them locally. (Left unchanged here — no local replacements
  exist and they are the real product images currently shown.)
