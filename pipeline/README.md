# pipeline/ — Distinctive Audio run

Drop this folder into the repo root (beside .claude/ and experience/), then run
/compile-build-brief from a Claude Code session started at the repo root.

## assets/ contents

- distinctive-audio-beat-table.csv   — approved choreography (ChatGPT planning stage)
- concept-register.md                — proposed concept + art-direction register
- brand-system.md                    — style authority (the pasted brand system spec)
- immersive-web-experiences.skill    — the build skill (or install it in .claude/skills/ instead)
- style-ref.png                      — the ONE cinematography reference (the approved style anchor:
                                       pale gallery, skylight, aligned components, gold signal path)

## ⚠ MISSING — add before running

- **index.html** — the production Tailwind page the CSV choreographs. Copy the real
  distinctive-audio index.html into assets/ (or the whole site folder). Phase 0 will
  stop with a missing-assets report until it's present.

## out/

Written by the pipeline (build-brief.md, preflight.md). Don't hand-edit; re-run instead.
