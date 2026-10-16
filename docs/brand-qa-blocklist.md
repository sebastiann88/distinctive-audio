# Brand-QA Blocklist

Derived 2026-07-02 by grepping every rendered page (`tmp/rendered/*.html`).
Two tiers: **competitors** (zero mentions allowed, ever) and **non-carried brands**
(no endorsements, comparisons, purchase recommendations, or "worth it?" framing;
genuinely neutral educational/history mentions only, and when in doubt, cut).

## Tier 1 — Competitors & retail links (ZERO tolerance)

| Name | Domain(s) | Found on (rendered) |
|---|---|---|
| Audioshop (Ottawa) | soundsight.ca | /products/loudspeakers |
| Capital Sound (Ottawa) | capitalsound.ca | /products/loudspeakers |
| Fleet Pro Sound & Lighting | — | /products/loudspeakers |
| Bliss Acoustics (Ottawa) | blissacoustics.com, nagraaudio.com dealer page | /products/digital-sources |
| The Sound Choice (Manotick) | thesoundchoice.ca | /products/digital-sources |
| Riverwood Acoustics | riverwoodacoustics.com | /products/cables-power |
| Vinyl Sound Canada | — | /products/digital-sources ("Available through Vinyl Sound Canada") |
| Any "where to buy / other retailers" framing | — | — |

Also disallowed: outbound links to retail/editorial shopping pages —
`whathifi.com` "best racks" link found on /products/racks-accessories.

## Tier 2 — Non-carried brands found in article HTML

Purchase-context mentions found (endorse/compare/recommend — must be rewritten):

| Brand | Found on | Context risk |
|---|---|---|
| Paradigm | loudspeakers | recommended |
| Klipsch | loudspeakers | recommended |
| Bose | loudspeakers | recommended/compared |
| Yorkville | loudspeakers | recommended |
| SVS | loudspeakers | recommended |
| Sonus faber | loudspeakers | recommended |
| JBL | loudspeakers | recommended |
| QSC | loudspeakers | pro-audio |
| Sonos | loudspeakers | recommended |
| WiiM | loudspeakers | recommended |
| Marantz | amplification, loudspeakers | recommended |
| Yamaha | amplification, loudspeakers | recommended |
| Denon | amplification | recommended |
| NAD | amplification, digital-sources | recommended |
| Rotel | amplification, digital-sources | recommended |
| McIntosh | amplification | comparison |
| Bryston | power-amplifiers, digital-sources | recommended |
| Bluesound | digital-sources | recommended |
| Aurender | digital-sources | recommended |
| Rega | analogue | recommended |
| Neumann | analogue | studio gear |
| Studer | analogue | studio gear |
| SSL (Solid State Logic) | analogue | studio gear |
| API | analogue | studio gear |
| Nagra | analogue, digital-sources, loudspeakers | recommended |
| Magnepan | cables-power | comparison |
| Nordost | cables-power | comparison |
| B&W (Bowers & Wilkins) | cables-power | comparison |
| Solidsteel | speaker-stands, racks-accessories | recommended + outbound link |
| Pangea | racks-accessories | recommended |
| Quadraspire | racks-accessories | recommended |
| Atacama | racks-accessories | recommended |
| Harmonic Resolution Systems (HRS) | racks-accessories | recommended |
| Fern & Roby | racks-accessories | recommended |
| Ictra | racks-accessories | recommended |
| Stillpoints | racks-accessories | compared alongside IsoAcoustics |
| Townshend (Pods) | racks-accessories | compared alongside IsoAcoustics |
| Target Audio | speaker-stands | specs table |
| Cary Audio | amplification | endorsed as boutique tube brand |
| Line Magnetic | amplification | endorsed as boutique tube brand |
| Hi-Fi Rose | digital-sources | recommended (+ Vinyl Sound Canada retail pointer) |
| MSB Technology | digital-sources | recommended |
| Playback Designs | digital-sources | listed at competitor |
| Esoteric | digital-sources | listed at competitor |
| Taiko Audio | digital-sources | listed at competitor |
| Better Cables (Silver Serpent Air) | cables-power | recommended |
| Viablue | cables-power | recommended |
| Magico | loudspeakers | endorsed |
| Sonance / Episode / James Loudspeaker | loudspeakers | commercial-install content |
| Control4 / Crestron | loudspeakers | commercial-install content |
| Electro-Voice (EV) | loudspeakers | pro-PA content |
| Neve | analogue | studio gear |
| Telefunken | analogue | studio gear |
| Pultec | analogue | studio gear |
| Bettermaker | analogue | studio gear |
| Wesaudio | analogue | studio gear |
| Flock Audio | analogue | studio gear |

## Acceptable neutral entities (not brands-for-sale — keep if context is neutral)

- Streaming/library services: Roon, Tidal, Qobuz, Spotify, Apple Music
- Format/tech history: Philips/Sony as co-inventors of CD *only* in a historical
  sentence if already present and neutral (currently "Sony" appears on loudspeakers
  page in a purchase context — that instance must go)

## QA rule

Before any rewrite ships, grep the draft (and later the rendered page) for every
Tier 1 name/domain and every Tier 2 brand. Zero Tier 1 hits allowed; Tier 2 hits
allowed only in verified-neutral educational context.
