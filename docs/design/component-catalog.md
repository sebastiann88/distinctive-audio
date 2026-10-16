# Component Catalog (canonical)

Reference for templating the static design into Craft so visual fidelity holds across the rollout (Home, category pages, Products). Grounded in the static source in `web/*.html`, `web/tailwind.config.js`, and `web/src/input.css`. **Light mode only for v1** — strip `dark:` classes as pages are templated.

Related: [badges.md](badges.md) (status badge system), `CLAUDE.md` (content model).

## Design tokens (source: `web/tailwind.config.js`)

- **Color:** Material-3 semantic set — `primary` (#00263d navy), `primary-container`, full surface ramp (`surface-container-lowest`…`-highest`), `outline`/`outline-variant`, `on-*` pairs, `inverse-surface`, plus brand accents `accent-gold` (#f0aa10) and `accent-teal` (#005581).
- **Type roles:** `display-lg`, `headline-lg`/`-md`, `title-lg`, `body-lg`/`-md`, `label-lg`/`-md`, each with a `-mobile` size variant. Fonts: **Newsreader** (serif display/headlines), **Manrope** (titles/body), **Inter** (UI/labels).
- **Spacing:** `container-max` 1280px, `margin-mobile` 20px / `margin-desktop` 80px, `gutter` 24px, `stack-sm/md/lg`.
- **Radius (unusual — verify when templating):** DEFAULT `0.125rem`, `lg` 0.25rem, `xl` 0.5rem (`rounded-xl` = 8px), `full` 0.75rem (12px). Pills use literal `rounded-full`/9999px in component CSS, **not** the Tailwind `full` token.
- **Shadow:** `shadow-ambient` (soft navy-tinted); more hand-written variants in `src/input.css`.

### Cross-cutting notes
- **Two button systems exist:** utility-class buttons in markup vs `.btn-*` in `src/input.css` (different colors). **Canonical = the utility-class pattern** used below; retire/reconcile `.btn-*`.
- Hero H1s use a signature **gold-italic emphasis word** (`<span class="text-accent-gold italic">`). Editor-entered titles need a dedicated field for this (see Hero Band) or the brand treatment is lost.

---

## Components

### 1. Hero Band
Two variants, same DNA: eyebrow + headline (with gold-italic emphasis) + body + CTAs + image.

- **Home variant** (`index.html` ~168): split layout; content in `bg-primary-container p-8 lg:p-16 rounded-xl shadow-ambient text-on-primary` with a gold top gradient bar; image to the right.
- **Category Tier-2 variant** (`integrated-amplifiers.html` ~326): full-width `bg-primary-container text-on-primary`, `grid md:grid-cols-2 gap-12`; eyebrow = gold rule on top (`w-12 h-0.5 bg-accent-gold`) + `text-accent-gold` label; H1 `font-headline-lg-mobile md:font-headline-lg` with one italic-gold span; primary CTA `bg-accent-gold`, `py-3`; image `aspect-[16/9]`.
- **Category Tier-1 variant** (`amplification.html` ~288): **also navy** (`bg-primary-container text-on-primary`), but a richer layout — `grid md:grid-cols-12` (6/6); eyebrow = label in `text-tertiary-fixed-dim` with the gold rule **after** it; editorial headline `text-surface` with italic-gold emphasis; CTAs `py-4 uppercase tracking-wide`; image `aspect-[3/2]` with `rounded-lg shadow-2xl border border-outline-variant/20`.

**Fields/block:** `heroEyebrow` (text), `heroHeading` + `heroEmphasisWord` (separate field driving the italic-gold span), `heroBody`, `primaryCta` (label+url), `secondaryCta`, `heroImage` (asset), `heroVariant` (or derive from category level). Constrain heading length so the multi-column grid doesn't break. **Empty-state guard:** when `heroImage` is empty, collapse to single-column/centered so the hero never renders half-empty.

### 2. Eyebrow Heading
Gold rule + uppercase label; appears ~12×. Make a Twig macro `{{ eyebrow(text, align) }}`.
```
<span class="w-8 h-px bg-accent-gold"></span>
<span class="font-label-md text-label-md tracking-widest uppercase text-accent-gold|text-on-surface-variant">…</span>
```
Centered variant wraps the label in two rules.

### 3. Category Card (Home "Featured Categories", `index.html` ~407)
```
<a class="group block">
  <div class="aspect-square bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-ambient group-hover:shadow-md transition-shadow">
    <img class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700">
  <h3 class="font-title-lg text-title-lg text-primary group-hover:text-accent-gold transition-colors">
  <p class="font-body-md text-body-md text-on-surface-variant">
```
**Block/entry:** category (title, blurb, image, url).

### 4. Child-Category Card (Tier-1 grid, `amplification.html` ~361)
```
<a class="group flex flex-col bg-surface border border-outline-variant rounded-lg p-8 hover:border-accent-gold hover:shadow-lg hover:shadow-tertiary-fixed-dim/10 transition-all">
  <span class="… size-14 rounded-full bg-surface-container-high text-primary-container group-hover:bg-accent-gold group-hover:text-on-surface … material-symbols-outlined text-[28px]">{icon}</span>
  <h3 class="font-headline-md text-title-lg text-on-surface mb-2">
  <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
  <span>Explore <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow…</span></span>
```
**Source:** child entries of the Structure section (icon, title, blurb, url).

### 5. Product Card (category page, `integrated-amplifiers.html` ~487)
```
<div class="group border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest flex flex-col">
  <div class="relative aspect-square overflow-hidden bg-surface-variant/30 …">   {/* status badge slot top-2 left-2 (see badges.md) */}
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
  <div class="p-4 flex flex-col flex-grow">
    <div class="flex gap-1 mb-2">{spec chips: bg-surface-container text-on-surface text-[10px] px-1.5 py-0.5 rounded font-medium}</div>
    <h3 class="font-title-lg text-title-lg text-on-surface mb-2">
    <div class="mt-auto pt-4 flex items-center justify-between">
      <span class="font-bold text-primary">{price}</span>
      <a class="font-label-lg text-label-lg uppercase tracking-wide text-primary-container hover:text-accent-gold transition-colors">Enquire</a>
```
**Maps to Inventory entry:** image, condition+availability (→ [badges.md](badges.md)), specChips, title, price, enquire url.

### 6. Spec Leader-List (`src/input.css` `.leader-list`)
Dotted-leader spec rows: `li` flex baseline, `::before` dotted `#c1c7ce`; `.label` Inter 14px 600 `#0b1c30`; `.value` Manrope 16px `#41474e`. **Block:** repeatable label/value rows.

### 7. Inventory Table Row (`templates/_components/productsTable.twig`) — the catalogue surface
Restyled in #24 (post-owner-feedback final tokens):
- **Column header row** (`thead th`): `font-label-md text-label-md font-semibold text-on-surface uppercase tracking-widest px-6 py-4`. The thead `<tr>` carries `border-b-2 border-outline-variant` (heavier "designed" underline). Confident but not loud — deliberately NOT `accent-teal`.
- **Section group header** (`th[scope="colgroup"] colspan="5"`): NO filled bar — the eyebrow pattern, sized up for presence: `<span class="w-8 h-px bg-accent-gold">` + label `font-title-lg text-title-lg uppercase tracking-wide text-on-surface`; cell `px-6 pt-12 pb-3 border-b border-outline-variant` (`pt-6 border-t-0` on `loop.first`).
- Data row: `th[scope="row"]` = name (`font-body-lg font-semibold text-on-surface`) + description (`font-body-md text-on-surface-variant`); `td` type; `td` status → condition pill per [badges.md](badges.md); `td` MSRP (`text-on-surface-variant text-right`); `td` sale (`text-accent-teal font-medium text-right` — the one place teal earns its keep). Per-row Enquire was REMOVED (table is 5 columns).
- Filtering toggles row visibility server-side via the Sprig re-render (the old `.da-row-hidden` client trick is gone).

One Twig macro per Inventory entry, grouped by the 4 sections (Electronics / Analogue / Loudspeakers / Cables & Accessories).

### 8. CTA Band
Two variants:
- **Gold** (`index.html` ~696): `w-full bg-accent-gold text-on-background py-20 text-center`; headline + button `bg-primary-container text-on-primary`.
- **Navy** (`integrated-amplifiers.html` CTA / about): `bg-primary-container text-on-primary` (or `bg-surface` variant with gold button as on the category page).

**Block:** `ctaHeadline`, `ctaButton` (label+url), `variant` (gold|navy).

### 9. Related / Explore Chips (`index.html` ~713, category pages "Explore Further")
```
<a class="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant
          hover:border-primary-container hover:text-primary-container font-label-md
          transition-colors bg-surface-bright">…</a>
```
(Category pages use `px-5 py-2 … bg-background`.) **Block:** list of label+url, or auto from related/sibling entries. This same pill is the base for the Products **active-filter chips** (add a trailing `×`).

---

## Products page states (don't exist in static — build these)

The static filter bar (`.da-filter-bar`, 4 `<select>`s: Product type, Status, Retail price, Sale price) has **no apply/clear and no results feedback**; the CSS ships `.da-row-hidden{display:none!important}` as the intended hide mechanism. Filtering is **server-rendered via Craft element queries** (no Datastar for v1 — so **no loading state needed**, full page reload).

1. **Filter-active + clear (highest priority):** results bar above the table — left: live count "Showing N of M products" (`font-body-md text-on-surface-variant`, tabular-nums); right: "Clear all filters" link (`font-label-lg uppercase tracking-wide text-primary-container hover:text-accent-gold`), shown only when ≥1 filter active. Active filters as removable chips (chip pattern §9 + trailing `close` icon). Active select group → `border-accent-teal`.
2. **Zero-results:** keep `<thead>`; replace `<tbody>` with a single `<td colspan="5">` centered block (`py-16`): `search_off` icon 40px `text-outline`; "No products match these filters" (`font-title-lg text-on-surface`); "Try removing a filter or browse the full catalogue." (`font-body-md text-on-surface-variant`); "Clear all filters" button (`bg-primary-container text-on-primary px-6 py-3 rounded font-label-lg`).
3. **Empty category (category page with 0 in-stock):** keep hero/intro/FAQ/CTA; only the product **grid** swaps to a centered card (`rounded-xl border border-outline-variant bg-surface-container-lowest shadow-ambient p-12 text-center`): `inventory_2` icon `text-primary-container`; "No current stock in this category"; "Inventory moves quickly. Tell us what you're after and we'll source it or notify you."; primary CTA "Enquire about [Category]" → /contact; secondary text-link "Browse all products" → /products. **Never render an empty grid.**
4. **Sold / Reserved:** see [badges.md](badges.md) (availability axis + card/row treatments).
