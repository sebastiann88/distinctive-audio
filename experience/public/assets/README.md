Place static assets here (models, textures, posters, the DRACO decoder in
../draco/). Vite copies everything in public/ into dist/ on build, served from
the web root — reference them by absolute path, e.g. /assets/turntable.glb.

Referenced by the demo manifest in site/partials/experience.html:
  - turntable.glb        (model)
  - wood-color.jpg       (color texture; colorSpace: srgb)
  - poster-800.jpg / poster-1600.jpg  (LCP poster + srcset)
  - share-1200x630.jpg   (Open Graph image)
Swap in your own; keep the manifest names in sync.

Self-host the DRACO decoder for production: copy three's
examples/jsm/libs/draco/ into ../draco/ and point Utils/Loader.js at 'draco/'.

(On a CMS port, most of these move into managed asset volumes; the manifest
still emits plain URLs, so nothing in the JS changes.)
