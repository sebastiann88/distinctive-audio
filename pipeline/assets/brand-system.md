BRAND SYSTEM — Distinctive Audio (high-end hi-fi retailer, Ottawa).
Output ONE responsive HTML5 document. Tailwind via CDN:
  https://cdn.tailwindcss.com?plugins=forms,container-queries  — NO React/Vue/Svelte.
Mobile-first. Semantic landmarks (header/nav/main/section/footer), ARIA labels,
visible focus rings, WCAG AA contrast, keyboard friendly.

Fonts (Google Fonts): headings = Newsreader (serif) -> font-headline;
body = Manrope -> font-body; UI labels/buttons = Inter -> font-label.
Icons = Material Symbols Outlined.

tailwind.config theme.extend.colors:
  primary:#003d5e  primary-container:#005581  on-primary-container:#8ec9fb
  secondary:#7d5700  secondary-container:#ffba2f  surface:#f8f9ff
  on-surface:#0b1c30  outline:#71787f  outline-variant:#c1c7d0
  accent:#f0aa10  accent-hover:#d8980e
theme.extend.borderRadius: DEFAULT .125rem, lg .25rem, xl .5rem, full .75rem
Page background #f4f7fb; default body text #005581.

MOOD: high-end, calm, editorial. Generous whitespace; sections py-20 (py-12 mobile);
max-w-6xl centered container. Teal (#003d5e) sticky header. Display headings in
Newsreader serif with exactly ONE word in accent gold (#f0aa10). Above each section
title: a short gold rule + small uppercase Inter eyebrow label. Primary CTA = solid
gold (#f0aa10) with dark text; secondary CTA = outline. Cards rounded-xl, subtle
outline-variant border, soft shadow.

HEADER NAV (every page): Home, About, Lines We Carry, Products, Contact +
mobile hamburger (minimal vanilla JS toggle).
FOOTER (every page): "Distinctive Audio" wordmark; 903 Carling Avenue, Ottawa ON;
"By appointment"; quick links (About, Products, Lines We Carry, Contact);
location + email icons; "© 2026 Distinctive Audio Inc."

SEO RULES — applied in every prompt

* One H1 per page containing the primary keyword; H2 for sections, H3 for cards.
* <title> ≤ 60 chars, pattern "<Primary Keyword> | Distinctive Audio" (keep "Ottawa" in the keyword or suffix). <meta description> ~150 chars: benefit + Ottawa/Gatineau + soft CTA.
* <html lang="en-CA">, canonical link, Open Graph (og:title/description/type=website/locale=en_CA/url) + twitter:card=summary_large_image.
* Every <img> gets descriptive, keyword-natural alt text, explicit width/height, and loading="lazy" — except the hero/LCP image which uses loading="eager" + fetchpriority="high".
* Real internal links by page name (never "#"); include a "Related" link cluster on every page.
* JSON-LD: LocalBusiness (Home/About/Contact), BreadcrumbList (all), Product + ItemList (category pages), Person (About → Rhéal Nadeau). Keep NAP — name, address, phone — identical everywhere.
* Size every image slot to the real photo's aspect ratio so the file drops in 1:1 with no awkward cropping.
