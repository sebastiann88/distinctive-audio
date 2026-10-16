# Brand-QA Audit — SurgeGraph Category Articles

Audited 2026-07-02 against `carried-brands.md` (whitelist) and `brand-qa-blocklist.md`.
Scope: all 28 category pages + 6 singles, audited from **rendered local pages**
(`tmp/rendered/`), i.e. exactly what crawlers see. Content lives in Craft Matrix
`body` blocks (Rich Text / FAQ Item / Lead Intro) on the Product Category entries.

## Executive summary

The damage is concentrated in the **six Tier-1 hub pages** — the long-form
SurgeGraph articles. **All six are Critical.** They collectively link out to
seven competitor/retail sites, endorse 40+ non-carried brands, contain a
"Where to Buy in Ottawa" section that reviews three competitors, an entire
rentals section for a service Distinctive Audio doesn't offer, and a FAQ answer
that flatly tells vinyl buyers vinyl is inferior.

The 22 Tier-2 sub-pages are largely fine: **19 clean**, 2 with inventory-mismatch
tables (High/Medium), 1 with a title typo (Low). The singles (Home, About,
Contact, Lines We Carry, All-in-One, Products) have **no brand violations** —
only shared template issues (dead social links, meta problems).

## Severity table

| Page | Severity | Core problem |
|---|---|---|
| /products/loudspeakers | **Critical** | "Where to Buy" section reviews + links Audioshop, Capital Sound, Fleet Pro; Paradigm/Klipsch/Bose/Sonus faber/Magico endorsements; PA/commercial-install/rental sections; rental capability we don't have |
| /products/analogue | **Critical** | Article is a recording-studio gear guide (SSL, API, Neve, Studer, Neumann, Pultec…); "we've spent enough time in studios" claim; FAQ "Is vinyl higher fidelity?" → "No."; typo "cheerished" |
| /products/amplification | **Critical** | "Trusted Amplifier Brands Stocked by Ottawa Retailers" table + prose endorsing McIntosh, Rotel, NAD, Marantz, Yamaha, Denon, Cary Audio, Line Magnetic; home-theatre-receiver content |
| /products/digital-sources | **Critical** | "Where to Audition" section links Bliss Acoustics, The Sound Choice, Nagra dealer page; names Audioshop; recommends Bluesound, Aurender, MSB, Hi-Fi Rose (with a Vinyl Sound Canada retail pointer) |
| /products/cables-power | **Critical** | Outbound link to riverwoodacoustics.com; endorses Better Cables, Viablue; B&W/Magnepan/Nordost comparisons; fabricated claim that Unity Audio cables are "picked up by Riverwood Acoustics" |
| /products/racks-accessories | **Critical** | Outbound links to whathifi.com "best racks" + solidsteel.it; tier-picks recommending Pangea, Solidsteel, Atacama, Quadraspire, HRS, Fern & Roby, Ictra; "cross-shopping local dealers" framing |
| /products/loudspeakers/floorstanding-speakers | **High** | Specs table calls "Audio Physic Midex" + "PS Audio Aspen FR30" "both of our towers" — neither matches the actual stock (Audio Physics Classic 15, ML Motion F20) |
| /products/amplification/power-amplifiers | **High** | Bryston 4B³ ($6,995) featured in the recommendation table as if stocked |
| /products/loudspeakers/speaker-stands | **Medium** | Construction table lists Solidsteel SS-6, "Target Audio FS-Series", "Custom Artisan Series" — none match the actual stock (Tri-Art, Custom Design FS-102); stray `&amp;` entity in a heading |
| /products/cables-power/ac-power-cords | **Low** | Meta title typo "AC PowerCords"; content clean |
| about | **Low** | "personalized"/"personalised" spelling inconsistency |
| 19 other category pages | **Clean** | Carried brands only, on-audience, no violations |
| home, contact, lines-we-carry, all-in-one-systems, products | **Clean (content)** | Template-level issues only (see Sitewide) |

---

## Critical pages — detail

### 1. /products/loudspeakers ("Where Music Takes Shape", ~2,800 words)

**Competitor mentions & links (Tier 1, zero tolerance):**
- H2 **"Where to Buy Loudspeakers in Ottawa"** with an H3 per competitor:
  - **Audioshop** — "You can browse their curated rooms on Bank Street and actually hear bookshelf speakers driven by tube amplifiers, not just stare at spec sheets." Links `http://soundsight.ca/`.
  - **Capital Sound** — "If your project is install-heavy, Capital Sound Canada tends to be the name that surfaces… They carry Klipsch, SVS, and Marantz." Links `http://www.capitalsound.ca/`.
  - **Fleet Pro Sound & Lighting** — "Fleet Pro is the working musician's shop, stocking Yorkville, JBL, QSC, and EV alongside lighting rigs and a busy repair bench."
- A **"Brands Stocked by Ottawa Retailers"** comparison table tiering Bliss Acoustics, Paradigm Persona/Founder, Klipsch Reference, Bose, JBL, Yamaha, Yorkville, QSC.

**Non-carried endorsements (samples):**
- "Most regulars I've talked to say the shop's strength is patience: they'll spend two hours rotating Paradigm Founder Series towers…"
- "Paradigm's Founder Series in matte or gloss white finishes shows up constantly in Ottawa builds."
- "…leans heavily on Paradigm's flagship line, Bliss Acoustics, Sonus Faber, and the occasional Magico demo."
- "WiiM Pro or a Sonos Amp feeding architectural speakers in three or four zones."
- "Nagra Reference Anniversary turntable feeding a pair of Bliss Acoustics floorstanders."

**Off-audience sections (whole H2/H3s):** "Commercial and Background Audio",
"Pro PA and DJ Rigs", "Commercial Install Brands" (Sonance, Episode, James
Loudspeaker, Control4, Crestron, CCTV), and H2 **"Rent Loudspeakers for Ottawa
Events"** — rental packages, delivery fees, on-site soundcheck. Distinctive Audio
does not rent PA gear; this is a false capability claim.

**False first-person:** "Most regulars I've talked to…" (unattributed persona).

**Keep:** H1 "Where Music Takes Shape"; the 4 FAQ questions; keyword targets
("loudspeakers Ottawa", placement, room acoustics); 5 internal links;
WebPage + BreadcrumbList JSON-LD; heading depth (13 H2 / 16 H3).

### 2. /products/analogue ("The Warmth of Vinyl", ~4,500 words)

**Wrong audience — the core failure.** The body is a pro-audio buyer's guide:
sections "Preamps and Channel Strips", "Compressors and Limiters", "EQs, Mixers,
and Tape Machines", "Balanced vs Unbalanced Connections", "Stereo vs Mono and
Phase Issues", a "Practical Starter Chain" that runs *mic → preamp → compressor
→ EQ → converter*, and advice like "Buying a flagship console before treating
the room". Studio brands throughout: SSL ("SSL bus compressor"), API, Neve
("vintage Neve 8068"), Studer ("Studer A800"), Neumann ("Neumann U47"),
Telefunken ("TF 51"), Pultec ("EQP-1A"), Bettermaker, Wesaudio, Flock Audio,
plus a Steve Albini anecdote. Even 3 of 5 FAQ questions are studio questions
("Is analog gear worth it if I mix in the box?", "Can plugins fully replace
analog hardware?", "What's the difference between a summing mixer and a studio
console?").

**Self-undermining FAQ (verbatim):**
> Q: "Is vinyl actually higher fidelity than digital?"
> A: "No. Vinyl has lower dynamic range and more noise. People prefer it for its harmonic character and the ritual, not its measurements."

Plus an Analog-vs-Digital table showing analog losing on every measured spec.

**False first-person (verbatim):** "We've spent enough time in studios and
listening rooms to know the debate isn't really analog vs digital anymore."

**Typo:** "cheerished LPs" (hero copy).

**Keep:** H1 "The Warmth of Vinyl"; the vinyl-relevant heading skeleton
(what-is / why / types / analog-vs-digital / how-to-choose / starter chain /
common mistakes translates cleanly to turntable-land); FAQ slot count;
internal links to phono preamplifiers; JSON-LD.

### 3. /products/amplification ("The Heart of Your System", ~2,600 words)

- H2 **"Trusted Amplifier Brands Stocked by Ottawa Retailers"** — false framing
  (we don't stock any of them) — with a 6-row comparison table endorsing
  **McIntosh, Rotel, NAD, Marantz, Yamaha, Denon**, then H3 prose sections
  "McIntosh, Rotel, and NAD" and "Marantz, Yamaha, and Denon".
- Boutique section: "PrimaLuna, **Cary Audio**, **Line Magnetic**, and a handful
  of others… amplifiers people buy once and keep for twenty years" (PrimaLuna is
  carried; the other two are not).
- Off-audience: H3 "Multi-Channel and Home Theater Receivers" (Atmos, 5/7/9/11
  channel), "Aventage AVRs", and an install section citing "Dirac Live or
  Audyssey MultEQ XT32" (AVR calibration tools).

**Keep:** H1; strong heading structure (power delivery, speaker pairing, tube
repair/restoration — the tube-repair section matches a real DA strength); 4 FAQ
questions; subcategory internal links; JSON-LD.

### 4. /products/digital-sources ("Bits to Beautiful", ~1,850 words)

- H2 **"Where to Audition High-End Digital Sources in Ottawa"**:
  - "The team at **Bliss Acoustics** carries a roster of high-end brands you won't find at most shops…" links `https://blissacoustics.com/digital/`; name-drops Aurender, MSB Technology, Playback Designs, Esoteric, Taiko Audio; links the Nagra dealer page for Bliss.
  - "Out in Manotick, **The Sound Choice** covers both sides of the format war." Links `https://www.thesoundchoice.ca/`.
  - "**Audioshop** on Bank Street is also still in the conversation, particularly for Bryston, NAD, and Rotel digital components."
- Budget-tier table recommends Bluesound Node ICON, Hi-Fi Rose RS151, Aurender A20, MSB Premier.
- H2 "Which Brands Define Audiophile-Grade Digital Playback?" endorses Bluesound (ESS chipset detail) and Hi-Fi Rose — "**Available through Vinyl Sound Canada**" (a retailer pointer). EverSolo praise in the same section is fine (carried/in stock).

**Keep:** H1 "Bits to Beautiful"; heading skeleton (what counts as a source /
DAC-streamer-all-in-one decision / features to compare / match to system /
setup tips); 3 FAQ questions; subcategory links; JSON-LD. The "Distinctive
Audio on Carling" H3 in the audition section is salvageable as the core of a
rewritten section.

### 5. /products/cables-power ("The Foundation of Fidelity", ~3,800 words)

- **Riverwood link:** "Unity Audio is the obvious name, and their work has been
  picked up by **Riverwood Acoustics** as the recommended pairing for their
  single-driver speakers." Links `https://www.riverwoodacoustics.com/pages/cables`.
  Note: the Unity-Audio-as-cable-builder claim appears **fabricated** (Unity
  Audio is our loudspeaker line) — cut, don't just unlink.
- Endorses **Better Cables** ("the Better Cables Silver Serpent Air audiophile
  RCA cables show up constantly in Ottawa listening rooms") and **Viablue**
  ("honest performance price points").
- Comparisons via **B&W 800 series / Magnepan** owners; **Nordost** named
  alongside Cardas.
- The objectivist/subjectivist debate section repeats "snake oil" framing —
  keep the honest structure but tighten so it doesn't undermine the category.

**Keep:** H1; the custom-cable positioning (genuine differentiator, already
present: "we build custom interconnects", hand-soldered terminations, custom
lengths); heading structure; 4 FAQ questions; internal links; JSON-LD.

### 6. /products/racks-accessories ("Stability Meets Silence", ~7,800 words — longest article on the site)

- Outbound links: What Hi-Fi "best hi-fi and AV racks" shopping guide;
  `https://www.solidsteel.it/`.
- H3 **"Entry, Mid, and Reference Tier Picks"** recommends non-carried brands at
  every tier: "Entry-level buyers should look at **Pangea** or the lower
  **Solidsteel** lines"; "Mid-tier listeners get serious returns from **Atacama
  Evoque** or **Quadraspire SVT**"; "Reference-tier shoppers move into **HRS**,
  **Fern & Roby**, or custom **Ictra** builds."
- "Putting IsoAcoustics, **Stillpoints**, or **Townshend Pods** beneath a
  turntable…" — peers non-carried brands with our line.
- False framing: "Here's a quick frame of reference for shoppers cross-shopping
  local dealers" — a masked buyer's guide for competitors; "in our experience
  and in the wider audiophile press" attached to non-carried recommendations.

**Keep:** H1; excellent educational skeleton (materials science, configurations,
accessories, matching, mistakes); 4 FAQ questions; JSON-LD. Rewrite tier picks
around Norstone / Tri-Art / IsoAcoustics / Black Diamond Racing — we genuinely
stock every tier this article describes.

---

## High / Medium / Low pages

### /products/loudspeakers/floorstanding-speakers — High
Specs table: "both of our towers are 4-ohm loads — the **Audio Physic Midex** at
89 dB and the **PS Audio Aspen FR30** at 87 dB". Neither is in stock; the actual
cards on the page are Audio Physics Classic 15 ($3,749.95) and Martin Logan
Motion F20 ($3,499.95). Fix the table to match real inventory.

### /products/amplification/power-amplifiers — High
Recommendation table row: "**Bryston 4B³ (Cubed) / Solid State / 300 W × 2 /
$6,995**" presented as available. Bryston is not carried. Replace with a carried
unit (e.g. Parasound; ModWright is already featured).

### /products/loudspeakers/speaker-stands — Medium
Construction table rows "**Solidsteel SS-6**", "**Target Audio FS-Series**",
"**Custom Artisan Series**" don't match the actual stock (Tri-Art B-Series 20″
bamboo, Custom Design FS-102 24″). Also a stray `&amp;` rendering as literal
text in the "Rigidity & Mass" heading.

### /products/cables-power/ac-power-cords — Low
Meta/title typo "AC **PowerCords**" (missing space). Body content clean.
Verify "Parsec Power" is a real Cardas line name before keeping it.

### /about — Low
"personalized service" vs "personalised advice" — pick one spelling (suggest
Canadian "personalized" to match the rest of the site).

---

## Clean pages (19 category + singles)

bookshelf-speakers, electrostatic-panel-speakers, subwoofers, turntables,
phono-cartridges, integrated-amplifiers, solid-state-integrated-amplifiers,
tube-integrated-amplifiers, preamplifiers, phono-preamplifiers,
cd-players-transports, digital-to-analogue-converters, music-streamers,
universal-disc-players, interconnects-speaker-cables, power-line-conditioners,
racks, cones-isolation — all feature carried brands only, on-audience, with
solid FAQ/AEO structure. **Do not touch their article copy** except where
Phase 3 style rules demand a tweak.

Home, Contact, Lines We Carry, All-in-One Systems, Products: no brand
violations in content.

## Sitewide template issues (fix in Phase 4, they're in Twig not entries)

1. **Dead `#` social links** in the footer on every page (Facebook, Instagram,
   X, YouTube — all `href="#"`). Remove icons unless real accounts exist.
2. **`<meta name="twitter:creator" content="@">`** — empty handle on every page.
3. **Footer "MITKIT for your Turntable"** links to generic `/products`.
4. **Homepage meta description is 156 chars** and ends with a truncated "and…" —
   rewrite under ~155.

## What survives everywhere (the SEO/AEO payload to preserve in Phase 3)

- Every page has WebPage + BreadcrumbList JSON-LD (via SEOmatic); no FAQPage
  schema found on-page — consider adding FAQPage where FAQs exist (Phase 3
  option, verify SEOmatic config).
- FAQ sections exist on all category pages, 3–6 questions each — keep question
  count, rewrite off-brand answers.
- "«Category» in Ottawa" H1/keyword pattern on Tier-2 pages — keep.
- Internal-link mesh between sibling categories and /contact — keep and extend.
- Word counts to preserve ±20%: loudspeakers ~2.8k, analogue ~4.5k,
  amplification ~2.6k, digital-sources ~1.85k, cables-power ~3.8k,
  racks-accessories ~7.8k (consider whether 7.8k is worth keeping at full
  length — it's the site's longest page; recommendation: keep ≥6.2k to stay
  within −20%).

## Recommended Phase 3 scope

1. Full rewrites: the 6 Tier-1 hub articles.
2. Surgical fixes: floorstanding specs table, power-amp Bryston row,
   speaker-stands table + entity, ac-power-cords title, about spelling.
3. Leave the 19 clean pages alone.
4. Sitewide template fixes in Phase 4.
