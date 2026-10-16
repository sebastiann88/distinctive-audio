# Status Badge System (canonical)

One unified badge system covering **two independent axes** on an Inventory item:

- **Condition** — descriptive, informational, **always shown**. Calm/tonal so the catalogue stays premium.
- **Availability** — the actionable signal, **only shown when not plain `Available`**. Higher contrast so it stands out from condition.

This **supersedes** the old `.da-status-pill` (Brand New = teal / all others = secondary-container). Keep its geometry; replace its color logic with the variants below.

## Why fixed CSS classes (not Tailwind utilities)

The variant is chosen from DB data (condition / availability values) at render time. Tailwind's purge scans templates statically and will **strip** any utility class it can't see literally. So these are authored as **fixed CSS classes in `web/src/input.css`** (same pattern as the existing `.da-status-pill`). Do **not** build the variants from dynamic `bg-*`/`text-*` utility strings. Hex values below come straight from `tailwind.config.js` tokens, so the system stays on-brand.

## Shared base

Geometry bumped one notch per #24 (owner wanted larger, more legible pills). This is the canonical size — do **not** fork a separate smaller pill on the products table.

```css
.status-pill {
  display: inline-block;
  padding: 0.3125rem 0.6875rem; /* 5px 11px (was 4px 10px) */
  border-radius: 9999px;
  border: 1px solid transparent;
  font-family: Inter, sans-serif;
  font-size: 11px;            /* was 10.5px */
  line-height: 1;
  font-weight: 600;           /* was 500 */
  letter-spacing: 0.06em;     /* was 0.04em */
  text-transform: uppercase;
  white-space: nowrap;
}
```

## Axis 1 — Condition (3 tonal tiers, soft light backgrounds)

Seven conditions collapse into **three tiers** — seven colors would be noisy for a high-end catalogue.

```css
.status-pill--new      { background:#e9f6ee; color:#2f7d4f; border-color:#b9e0c7; } /* New tier */
.status-pill--demo     { background:#ffdeaa; color:#5f4100; border-color:#f1be65; } /* Demo tier (secondary-fixed / on-secondary-fixed-variant / secondary-fixed-dim) */
.status-pill--preowned { background:#e6eeff; color:#41474e; border-color:#c1c7ce; } /* Pre-owned tier (surface-container / on-surface-variant / outline-variant) */
```

| Condition value | Class |
|---|---|
| Brand New | `.status-pill--new` |
| Almost New | `.status-pill--new` |
| Display | `.status-pill--demo` |
| Floor Demo | `.status-pill--demo` |
| Trade In | `.status-pill--preowned` |
| Consignment | `.status-pill--preowned` |
| Used | `.status-pill--preowned` |

Label text = the literal condition value (e.g. "Floor Demo").

## Axis 2 — Availability (the actionable signal)

```css
.status-pill--reserved { background:#fec96f; color:#775300; border-color:#f1be65; } /* secondary-container / on-secondary-container — warm "on hold" */
.status-pill--sold     { background:#213146; color:#ebf1ff; border-color:#213146; } /* inverse-surface / inverse-on-surface — dark, definitive "gone" */
```

| Availability value | Class |
|---|---|
| Available | *(render no badge — default, keep it uncluttered)* |
| Reserved | `.status-pill--reserved` |
| Sold | `.status-pill--sold` |

A normal in-stock item shows **only** its condition pill. A reserved/sold item shows the condition pill **plus** the availability pill.

## Twig mapping

```twig
{% set conditionClass = {
  'Brand New':   'status-pill--new',
  'Almost New':  'status-pill--new',
  'Display':     'status-pill--demo',
  'Floor Demo':  'status-pill--demo',
  'Trade In':    'status-pill--preowned',
  'Consignment': 'status-pill--preowned',
  'Used':        'status-pill--preowned',
}[item.condition] ?? 'status-pill--preowned' %}

{% set availabilityClass = {
  'Reserved': 'status-pill--reserved',
  'Sold':     'status-pill--sold',
}[item.availability] ?? null %}
```

## Placement & treatments

### Product card
The image well already has an absolute badge slot at `top-2 left-2`.

- **Condition pill** → `top-2 left-2` (as today).
- **Availability pill** (Reserved/Sold only) → `top-2 right-2` (opposite corner — never collide).
- **Reserved:** card otherwise unchanged; CTA stays "Enquire" (deals can fall through — still worth an enquiry).
- **Sold:** add a card modifier:

```css
.product-card--sold .product-card__img   { filter: grayscale(1); opacity: .75; }
.product-card--sold .product-card__price { text-decoration: line-through; color:#72787e; } /* outline */
```

CTA text "Enquire" → "Enquire about similar"; drop any hover-lift. **No diagonal corner ribbon** (too mass-market for this brand) — the dark top-right "Sold" pill + desaturated image + struck price is enough.

### Inventory table (Products page, Status column)
- Show the condition pill always. Append the availability pill (Reserved/Sold) right after it in the same cell, `gap: .375rem`.
- **Sold row:** mute it and strike the sale price (keep MSRP/sale visible for honest "was" context):

```css
tr.is-sold th[scope="row"], tr.is-sold td { color:#72787e; }
tr.is-sold td:nth-child(5) { text-decoration: line-through; } /* sale-price column */
```

- **Reserved row:** renders normally + the Reserved pill.

## Open owner decision (not a build blocker)

Whether **Sold** items stay listed (social proof / SEO) or get unpublished. The build above supports "stay, dimmed." If the owner prefers they vanish, it's a single `availability != 'Sold'` filter on the query — leave a toggle/comment for it.
