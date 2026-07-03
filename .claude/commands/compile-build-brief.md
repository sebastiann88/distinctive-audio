---
description: Compile a build brief for the immersive-web-experiences skill from the pipeline planning assets already in this repo
allowed-tools: Read, Glob, Grep, Bash, Write, Task
---

# /compile-build-brief — pipeline stage: plan → build handoff

Compile ONE build brief that a fresh Claude Code session, running the immersive-web-experiences skill, executes to build the scroll-driven experience. You are the ORCHESTRATOR: you discover assets, dispatch subagents, and assemble their outputs. You never build the experience yourself, never modify the assets or site files, and never invent beats, copy, tokens, or constraints not present in the assets.

Asset directory: `$ARGUMENTS` if given, else `./pipeline/assets/`, else discover across the repo root.

## Phase 0 — Asset discovery (you; no subagents)

Locate by glob + content sniffing:

1. **BEAT TABLE CSV** (required) — a .csv whose header contains: page, beat_id, beat_type, section_ref, section_heading, justification, canvas, dom_choreography, scroll_span_vh, transition_out, camera, light, subject_state.
2. **CONCEPT + REGISTER** (required) — .md/.txt containing the planning stage's proposed concept and art-direction register.
3. **TARGET HTML PAGE(S)** (required) — the production Tailwind pages named in the CSV's `page` column (plus the site folder if present).
4. **BRAND SYSTEM** (required) — the written design-system spec (palette, fonts, mood, accent rules).
5. **BUILD SKILL** (required) — `immersive-web-experiences.skill` in assets, OR the installed skill folder (`.claude/skills/immersive-web-experiences/` project or user scope). Prefer the installed folder if both exist.
6. **STYLE REFERENCE IMAGE** (optional, recommended, exactly one) — a .png/.jpg/.webp in the asset directory. If several exist, choose the most recently modified and say so.
7. **CONFIG** (optional) — `pipeline/pipeline.config.json`, key `experienceDir` (the Vite project path; default: the skill's scaffold convention).

Emit an **ASSET MANIFEST** table: asset → resolved path → status (found / missing / ambiguous). If any REQUIRED asset is missing: write the manifest and missing list to `pipeline/out/missing-assets.md`, print it, and STOP.

## Phase 1 — Parallel audits (subagents; dispatch ALL in one message, in parallel)

Pass each agent the exact file paths from the manifest — never pasted file bodies it can read itself.

- **pipeline-asset-auditor** → CSV schema, budget, and internal-consistency validation.
- **pipeline-content-verifier** → CSV/register ↔ HTML verbatim cross-check; extracts the verbatim heading inventory.
- **pipeline-brand-guardian** → brand system ↔ implemented tokens divergence; style-reference-image read; tailwind.config sync verdict.
- **pipeline-skill-reader** → hard-constraint extraction from the build skill, including the JSON manifest seam contract.

Collect their reports verbatim. Do not paraphrase, soften, or drop findings.

## Phase 2 — Compilation (subagent; sequential, after Phase 1)

Dispatch **pipeline-prompt-compiler** with: the asset manifest and all Phase 1 reports (verbatim). It is the ONLY writer in this phase. It writes:

- `pipeline/out/build-brief.md` — the brief a fresh Claude Code build session executes.
- `pipeline/out/preflight.md` — blockers, repo prerequisites, reference-image placement, sync verdict.

## Phase 3 — Wrap (you)

Print: the asset manifest summary; every BLOCKER verbatim (if none, say so); both output paths; the one-line run instruction ("open a fresh Claude Code session in [experienceDir] and paste pipeline/out/build-brief.md"). Then stop. Do not begin the build, do not edit site files, do not fix blockers — blockers are fixed upstream by the operator.
