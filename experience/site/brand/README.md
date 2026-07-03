# Brand / direction reference (inputs, not output)

Drop the project's design reference here — the build reads it, it is **not**
shipped. Good things to put in this folder:

- Google Stitch HTML exports
- A mockup or comp saved as static HTML
- An export of the client's existing site pages
- A brand style tile (colors, type, sample copy)

## What the build extracts

Read these files to derive the visual language, then encode it once in
`tailwind.config.js` (`theme.extend`) and in the scene's art direction:

| From the reference | Into |
|---|---|
| hex/rgb values, CSS `--color-*`, existing Tailwind color classes | `theme.extend.colors` (+ `sceneConfig.color`) |
| `font-family`, weights, heading/body scale | `theme.extend.fontFamily`, type classes |
| recurring padding/margin/gap, max-widths | spacing habits, `maxWidth` |
| headline voice, button labels, real copy | the UI overlay text (no lorem ipsum) |
| layout intent (hero position, CTA, nav) | how the immersive UI is arranged |
| overall mood (airy vs moody) | lighting/background/post in `World.js`/`Renderer.js` |

The point: the canvas and the Tailwind UI should read as one design that belongs
to the brand — not a generic template. `example-direction.html` shows the shape
of a reference; replace it with the real material.

Full method: `references/tailwind-and-brand-reference.md`.
