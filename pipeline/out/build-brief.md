# BUILD BRIEF — Distinctive Audio immersive homepage (index.html)

Compiled from the Phase 1 pipeline audits. Execute top to bottom. No approval stops.

---

## a) Invocation

Use the **immersive-web-experiences** skill. This is a **new project** (not an adaptation): scaffold it in the experience project directory at:

```
/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/experience
```

The directory exists and is empty. Copy the skill's `assets/experience/` scaffold verbatim per the skill's own instructions; all architecture (singletons, boot/mount, poster pattern, Motion pattern, update loop, teardown, build commands) comes from the skill and its reference files — this brief does not restate it and nothing in this brief overrides the skill's non-negotiables.

Place the reference material in `site/brand/` per the skill's convention:

- **Target HTML page:** `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/index.html` (verbatim copy also at `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/assets/index.html`) → copy into `site/brand/`.
- **Style reference image:** `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/assets/style-ref.png` → copy into `site/brand/`, replacing the scaffold's example-direction reference. **Authority:** this image is a lighting/material/mood (cinematography) reference only, subordinate to the brand system — per the brand guardian's read: "this image informs HOW the scene is lit and materialed — source direction, softness, reflection quality, restraint — never WHAT the brand's tokens are; wherever the image's tint or styling disagrees with brand-system.md, the brand system wins."

Also keep locally readable during the build:

- Beat table (choreography authority): `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/assets/distinctive-audio-beat-table.csv`
- Concept + register: `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/assets/concept-register.md`
- Brand system: `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/assets/brand-system.md`

## b) Assets + authority order

1. **CSV = choreography authority.** The beat table is final: 8 rows, `frame-index-01` … `dom-index-08`. Do not invent, merge, split, reorder, or rebalance beats. Spans, accent licenses, and camera/light/subject states are as written.
2. **HTML = content authority.** All overlay copy, headings, links, and CTAs come verbatim from `index.html`. The DOM must tell the full story with the canvas removed (poster + real copy + real links).
3. **Brand system = style authority.** `brand-system.md` wins every divergence the brand audit listed against the existing site build, specifically: primary (#003d5e, not #00263d), primary-container (#005581, not #003d5e), on-primary-container (#8ec9fb, not #B4D2EB), secondary-container (#ffba2f, not #fec96f), outline (#71787f, not #72787e), outline-variant (#c1c7d0, not #c1c7ce), token name `accent` (not `accent-gold`), accent-hover #d8980e as a real token (not the hand-rolled #d6980e hover), page background #f4f7fb (not #f8f9ff), default body text #005581 (not #0b1c30), primary CTA solid gold #f0aa10 with dark text (not #fec96f), and role font names `font-headline` / `font-body` / `font-label` (not the `-lg/-md` variants). Key off spec names; do not import the old config's MD3 expansion set.
4. **Style image = cinematography reference only** (see the TAKE/IGNORE read in section e).

## c) What to build

Build the scroll-driven experience per the skill's scaffold, at **Signature** intensity (one flagship page, 5 frame beats, a 515vh scripted scroll, one 145vh signature beat — the budget decision is already made in the CSV).

- **First pass geometry:** placeholder/primitive geometry built in World.js, proportioned per each row's `canvas` column (matte-black loudspeaker column on brass feet; three separated hi-fi forms; four plinths with turntable/amp/speaker/compact-source silhouettes; audition table with component, gloves, brass weight, chair; final two-speaker + chair listening position). Production GLBs swap in later **through the manifest only** — no geometry paths hardcoded in World.js.
- **Real copy:** the overlay reuses `index.html`'s copy verbatim (never lorem ipsum). Key lines from the verified heading inventory:
  - H1 "Ottawa's High-End Audio Store" — CTAs "Book a Showroom Demo" (primary), "Explore Products" (secondary)
  - H2 "The Distinctive Approach" — H3 cards "Tailored Synergy", "Environment First", "Long-Term Support"; no CTA
  - H2 "Featured Categories" — CTA "View all products"
  - H2 "Meet Rhéal Nadeau" — CTA "Read our story"
  - (no heading) proof/address band: "Visit us at 903 Carling Avenue, Ottawa" — no CTA
  - H2 "Bespoke Services" — H3 cards "Listening Demos", "Custom Cables"; two equal card CTAs "Learn more" (deliberately no single primary — do not add one)
  - H2 "Hear the difference for yourself" — CTA "Book a Showroom Demo"
  - (no heading) related quick-link cluster: "Related:" — nav pills only, no primary CTA
- **Real choreography:** the CSV mapping in section d.
- **UI overlay:** Tailwind v3, tokens encoded **once** in `theme.extend` from the brand audit's canonical values (section e). The skill's layer separation rules apply as written.
- **Poster (LCP):** subject = the frame-index-01 still: "A pale blue-white listening gallery with a single matte-black floorstanding loudspeaker on brass feet set to the right, polished concrete reflecting its silhouette, and an empty left wall held in quiet reserve." Alt text: "Matte-black floorstanding loudspeaker on brass feet in a pale high-end listening gallery at Distinctive Audio, Ottawa's high-end audio store." Dimensions: [poster image width x height — supply when the poster render is produced; size the slot to the real image's aspect ratio]. Follow the skill's poster pattern as-is.
- **Head metadata:** title `Distinctive Audio | Ottawa's High-End Audio Store` and meta description "Helping the Ottawa–Gatineau region listen better for nearly 40 years. High-end audio store offering tailored synergy, environment-first solutions, and long-term support." — both verbatim from index.html. `<html lang="en-CA">`. Canonical: [production URL — not present in any asset]. JSON-LD per the brand system's SEO rules: LocalBusiness (name "Distinctive Audio", address 903 Carling Avenue, Ottawa ON, "By appointment", phone: [not present in any asset]) + BreadcrumbList. Google Fonts in the host `<head>`: Newsreader, Manrope, Inter (same URLs as index.html).
- **Hotspots: none.** No asset defines an objectName/url/title inventory. All navigation stays in the DOM overlay as real `<a>` elements.

## d) CSV → manifest + Motion mapping

Express the choreography through the skill's manifest seam, using its quoted shape exactly:

```json
{
  "assets": [
    { "name": "base", "data": {}, "items": [
      { "name": "turntable", "source": "/assets/turntable.glb" },
      { "name": "wood", "source": "/assets/wood-color.jpg", "type": "texture", "colorSpace": "srgb" }
    ]}
  ],
  "sceneConfig": { "color": "#f0aa10", "scrollEnd": "bottom top" }
}
```

For this build: first pass ships `"assets": [{ "name": "base", "data": {}, "items": [] }]` (primitive geometry needs no loads); when production GLBs arrive they are added as items with `name` + `source` only (models), color textures with `type: "texture", colorSpace: "srgb"`, data maps with `type: "texture"` and no colorSpace. **Do not invent manifest keys beyond the seam contract** — `sceneConfig` is the contract's explicit freeform extension point, so the beat definitions below live there (e.g. `sceneConfig.beats`), alongside the brand colors (`#f4f7fb` ground, `#f8f9ff` surface, `#003d5e`/`#005581` teal, `#0b1c30` ink, `#f0aa10` accent) and `scrollEnd`.

**Scroll totals (index.html, the only page):** frame spans 95 + 145 + 95 + 90 + 90 = **515vh** of scripted scroll; dom-only rows contribute 0vh. Frame rows become sequential scroll beats proportional to `scroll_span_vh` — extending the skill's single `sceneState.scrollProgress` tween, never adding loops:

| beat_id | span | scrollProgress range | camera | light | subject_state |
|---|---|---|---|---|---|
| frame-index-01 | 95vh | 0.000 – 0.184 | "Low wide-normal camera at seated listening height, framed with subject right and blank wall left." | "Soft circular skylight wash from above with a faint cool wall gradient and no colour shift." | "Single loudspeaker standing silent, precise, and newly revealed." |
| frame-index-02 (signature) | 145vh | 0.184 – 0.466 | "Seated-height dolly move from slight left offset to centered alignment on the system axis." | "Same cool skylight with one scripted gold glint tracing the signal path for this beat only." | "Separated components becoming a tuned system in one room." |
| frame-index-03 | 95vh | 0.466 – 0.650 | "Calm three-quarter wide-normal view looking diagonally across the plinths with foreground floor space preserved." | "Even skylight with tiny gold edge catches on knobs, feet, and platter rim only." (edge-catch baseline — NOT an accent license) | "Product families arranged as a curated collection, not a catalogue wall." |
| frame-index-04 | 90vh | 0.650 – 0.825 | "Static medium-wide frame at table height with tabletop low and broad blank wall above." | "Soft skylight from high right, creating delicate reflections on the component face and brass weight." | "A curated system in mid-audition, implying expert human selection just outside frame." |
| frame-index-07 | 90vh | 0.825 – 1.000 | "Centered seated-height perspective from just behind the listener position, symmetrical but not theatrical." | "Cool skylight stays constant with a modest gold floor catch at the listening point only." | "Room ready for a private audition, waiting for the visitor." |

Honor each row's `transition_out` as the blend into the next range (e.g. frame-index-02: "Gold line fades back to edge catches only; camera glides past the aligned axis into a wider product field.").

**Luminous accent effects ONLY in the audited accent-moment beats:**
- `frame-index-02` — "a restrained gold line of light travels across their brass edges" / "one scripted gold glint tracing the signal path for this beat only"
- `frame-index-07` — "a soft gold reflection marks the exact listening spot on the floor" / "modest gold floor catch at the listening point only"

Every other beat is edge-catch-only by default.

**dom_choreography → the overlay layer**, honoring the rule that **body text is never read during a camera move** (pin copy in the still/settled portions of each beat):
- frame-index-01: hero copy pins over the empty left half, speaker stays right-weighted; CTAs enter after the first 35vh without covering the subject.
- frame-index-02: approach heading + paragraph pin upper-left; the three service ideas stagger over the lower-left as the gold alignment completes behind them.
- frame-index-03: category links and product labels occupy left/lower negative space in sequence; DOM may snap between groups while the still remains stable.
- frame-index-04: biography copy floats in the open wall area above the table; "Read our story" appears after the chair and tabletop objects settle.
- frame-index-07: closing heading pins above the empty chair zone; booking CTA lands in the clear central negative space without covering the speakers.

**dom-only rows → overlay flow, no camera move, no new scene state:**
- `dom-index-05` (section 05, address band): address text crosses a simple colour band / transparent spacer; no parallax subjects; ambient unchanged.
- `dom-index-06` (section 06, Bespoke Services): service blocks rise in clean staggered DOM motion over open negative space; no new 3D requirement; neutral locked perspective.
- `dom-index-08` (section 08, quick-links): links appear as ordinary DOM content over a stable surface colour; scene has ended; light falls away to the site footer treatment.

**Section refs kept as data attributes.** The page's sections carry no ids today; CSV refs are ordinal. Emit `data-section-ref="index.html section NN"` on each overlay section, and carry the verifier's proposed id list as the ids you apply: `hero`, `the-distinctive-approach`, `featured-categories`, `meet-rheal-nadeau`, `proof-band`, `bespoke-services`, `final-cta`, `related-links` (sections 01–08 in order).

## e) Style application

**`theme.extend` from the canonical token table (spec values — brand system wins):**

| token | value |
|---|---|
| primary | #003d5e |
| primary-container | #005581 |
| on-primary-container | #8ec9fb |
| secondary | #7d5700 |
| secondary-container | #ffba2f |
| surface | #f8f9ff |
| on-surface | #0b1c30 |
| outline | #71787f |
| outline-variant | #c1c7d0 |
| accent | #f0aa10 |
| accent-hover | #d8980e |
| borderRadius | DEFAULT .125rem / lg .25rem / xl .5rem / full .75rem |
| page background | #f4f7fb |
| default body text | #005581 |
| font-headline | Newsreader (serif) |
| font-body | Manrope |
| font-label | Inter |

UI habits from the brand system: sections py-20 (py-12 mobile); max-w-6xl centered container; teal (#003d5e) sticky header; display headings in Newsreader with exactly ONE word in accent gold (#f0aa10); short gold rule + small uppercase Inter eyebrow above each section title; primary CTA solid gold #f0aa10 with dark text, secondary CTA outline; cards rounded-xl with subtle outline-variant border and soft shadow.

**Environment (register):** "pale blue-white high-end listening gallery; not a retail showroom, not a dark nightclub, not a tech demo space." Material feel: "matte-black hi-fi objects, polished pale concrete, soft reflections, restrained brass feet/knobs/weights." Tone: "calm, editorial, premium, spacious, appointment-only."

**Style-reference TAKE list (governs World.js lighting, materials, and Renderer decisions):**
- Light: one dominant soft overhead source — a circular skylight-like halo above and slightly behind the subject — with broad, low-contrast cool ambient fill. Falloff gradual and creamy toward the floor line; no hard shadow terminators. For World.js: single large-area top light (slightly warm-neutral temperature), high-radius soft shadows, cool hemispheric ambient; no visible point-light hotspots.
- Material response: matte black with just enough sheen to hold a thin specular edge along cabinet corners — defined by silhouette against the pale ground, not surface detail. Renderer: low-roughness-variation matte PBR, subtle env-map, high metalness only on brass micro-details.
- Floor/wall: seamless pale ground, wall and floor blending in a soft cove; polished pale concrete with a diffused, low-opacity vertical reflection of the black subject — blurred, roughly 5–10% strength, never mirror-like.
- Spatial mood: vast negative space; one hero object off-centre with generous headroom; camera at calm standing height; nothing competes with the subject.
- Compositional restraint: single subject per frame; small supporting objects in isolated pools of the same soft light; no clutter, no dramatic rake angles.

**Style-reference IGNORE list:** the hero's warm cream/ivory atmospheric wash (ground must read #f4f7fb / #f8f9ff pale blue-white — take the light's softness and geometry, not its paper-warm tint); all UI chrome in the image (tokens come only from the brand system); any implied gold generosity (the register's stricter one-luminous-gold-event rule governs the 3D scene).

**Translated accent light rule (verbatim from the brand audit):** "Gold #f0aa10 is a scarce, scripted event: in the 3D scene it may exist only as narrow edge catches on matte-black objects, small brass material details, and the single choreographed signal-path illumination in The Distinctive Approach beat — never as ambient light, never as a wash, never on more than one luminous element at a time. All key/fill/ambient lighting stays cool pale neutral."

## f) Verification block

Run all of the following. Report results; do not pause for approval.

1. **Copy diffs clean against the HTML:** every overlay heading, paragraph, link label, and CTA diffs character-for-character against `index.html` (whitespace-normalized; apostrophe in "Ottawa's" is straight U+0027; "Rhéal" uses precomposed é U+00E9).
2. **Beat fidelity:** beat count (5 frame + 3 dom-only), order (01→08), and scroll proportions (95/145/95/90/90 of 515vh) match the CSV exactly; luminous accents appear ONLY in frame-index-02 and frame-index-07.
3. **Skill VERIFY hooks (verbatim):**
   - Both builds pass: `npm run build` emits dist/experience.js + dist/experience.css; `npm run build:css` emits dist/site.css
   - Exactly one render loop: Experience.update()'s RAF; GSAP tweens only values (sceneState / object props); no renderer.render() call outside Renderer
   - Manifest parses as valid JSON from script[data-experience-manifest]; shape matches assets.js (unique names; color maps colorSpace:'srgb'; data maps none; models name+source only)
   - Reduced-motion path verified: prefers-reduced-motion yields a genuinely calm result (held frame), created inside gsap.matchMedia(); Motion.destroy() → mm.revert()
   - Disable WebGL / JavaScript → the poster and DOM UI still render; the mount is never an empty box
   - Poster is the LCP element: real <img> with width/height, alt, fetchpriority="high", present in initial HTML; canvas boots only via IntersectionObserver
   - Lighthouse throttled mobile: LCP < 2.5s, INP < 200ms, no CLS from the mount; pixel ratio clamped to 2
   - curl the URL → title, description, poster alt/headline, and JSON-LD present in raw HTML; JSON-LD validates
   - #debug shows healthy frame rate on a mid-tier device; no console errors (incl. no "Invalid experience manifest JSON" warning)
   - Teardown clean: World disposes geometries/materials/textures; Experience.destroy() releases the singleton (no leaked WebGL contexts on nav/preview)
   - Hotspots (if present) each mirrored by a real DOM <a> to the same URL
   - Tailwind is v3 (tailwindcss@3.x, @tailwind base/components/utilities syntax), not v4
4. **Report** every simplification made (e.g. primitive proportions, deferred GLB swaps) and every brand divergence resolved in favour of the spec (the list in section b), in the final summary.
