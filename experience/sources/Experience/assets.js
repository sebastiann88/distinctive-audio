/**
 * Fallback asset manifest — used only when the page does NOT supply one.
 *
 * In production, the page embeds this exact shape as JSON (see
 * site/partials/experience.html) so the scene is data-driven per page. The shape
 * is identical whether a static file or a CMS emits it, which is the point: the
 * JS never changes, only the data.
 *
 * Per-item fields:
 *   name       - key you look it up by in resources.items
 *   source     - URL (e.g. /assets/... served from public/, or a CMS asset URL)
 *   type       - 'texture' triggers Texture conversion; omit for glb/gltf/fbx/hdr
 *   colorSpace - 'srgb' for color textures; omit for normal/roughness/data maps
 */
export default [
    {
        name: 'base',
        data: {},
        items:
        [
            // Intentionally empty: with no items the World builds its primitive
            // gallery, which is the no-asset fallback path. The page manifest
            // (site/partials/experience.html) is what ships the production GLBs:
            //   floorstanding-loudspeaker, compact-digital-source,
            //   integrated-amplifier, turntable-platter, low-listening-chair
            // (models take `name` + `source` only). Add them via the page, not here.
        ]
    }
]
