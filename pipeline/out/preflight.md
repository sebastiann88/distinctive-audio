# PREFLIGHT — Distinctive Audio immersive build

## Prerequisites

- Experience project scaffolded per the immersive-web-experiences skill in `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/experience` (directory exists at repo root, currently empty — the brief's first step copies the skill scaffold into it).
- Skill installed and active: `/Users/sebastiannadeau/.claude/skills/immersive-web-experiences/` (archive backup at `pipeline/assets/immersive-web-experiences.skill`).
- Reference material placed in the experience project's `site/brand/` per the skill's convention:
  - `pipeline/assets/style-ref.png` → `experience/site/brand/` (lighting/material/mood reference only, subordinate to the brand system).
  - Target HTML page `index.html` (repo root; verbatim copy at `pipeline/assets/index.html`) → `experience/site/brand/`.
  - Keep `pipeline/assets/distinctive-audio-beat-table.csv`, `pipeline/assets/concept-register.md`, and `pipeline/assets/brand-system.md` readable during the build.

## Run

Open a fresh Claude Code session in `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/experience` with the immersive-web-experiences skill active and paste the contents of `/Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/pipeline/out/build-brief.md`.

## Blockers

- [BLOCKER] TAILWIND SYNC: YES — theme.extend.colors in /Users/sebastiannadeau/Desktop/Graphic Design/Website/distinctive-audio-immersive/tailwind.config.js must be reconciled to the brand system before the build (tokens listed above); the experience build encodes tokens once in theme.extend and a stale config poisons every generated class downstream.

(Source: pipeline-brand-guardian. The CSV auditor, content verifier, and skill reader reported no blockers.)

## Sync

TAILWIND SYNC: YES — primary, primary-container, on-primary-container, secondary-container, outline, outline-variant, accent (naming: accent vs accent-gold), accent-hover (missing from theme.extend; only a hand-rolled #d6980e hover in input.css), plus page-background (#f4f7fb) and default body text (#005581) which live in input.css rather than tokens. Radius scale and font families need no change.

## Handoff forward

The `data-experience-manifest` seam (manifest shape + `[data-experience]` mount + poster `<img>` convention) keeps this build CMS-portable to the Craft stage — only the manifest emitter changes, the JS bundle ports unchanged.
