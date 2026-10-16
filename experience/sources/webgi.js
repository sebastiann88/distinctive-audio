import { ThreeViewer, GBufferPlugin, SSAAPlugin } from 'threepipe'
import { BloomPlugin } from '@threepipe/webgi-plugins'
import { MaterialConfiguratorPlugin } from '@threepipe/plugin-configurator'

/**
 * WebGI (Threepipe) product viewer — the standalone spinnable-model island.
 *
 * SEPARATE from the homepage's immersive experience (sources/index.js): that
 * island is a bespoke Three.js scene; this one is the WebGI ThreeViewer that
 * powers per-product 3D viewers, ported from the Craft CMS template
 * (webgi.js) that runs on the live site. The production GLBs were exported
 * from the WebGI editor (they carry WEBGI_* glTF extensions — bumpmaps,
 * lightmaps, viewer config), and this viewer honors them where plain
 * Three.js ignores them.
 *
 * Usage — give any canvas a model URL and load this bundle:
 *
 *   <canvas id="three-canvas" class="hidden md:block"
 *           data-webgi-model="dist/assets/models/floorstanding-loudspeaker.glb"
 *           style="width: 650px; height: 950px; max-width: 100%"></canvas>
 *   <script type="module" src="dist/webgi.js"></script>
 *
 * The data attribute is the CMS seam: the original Twig template's
 * `{{ entry.speaker3d.one().getUrl() }}` becomes the attribute value when the
 * page is rendered by Craft (see templates/_partials/glb/viewer.twig, the one
 * include every GLB viewer goes through). Optional attributes:
 *   data-webgi-background  — scene background color (default #F8FBFF)
 *   data-webgi-transparent — zero-alpha canvas so the model floats over the
 *     page (the homepage-hero treatment). Requires rgbm:false (RGBM output
 *     can't emit transparent pixels — it renders an opaque light-grey box),
 *     a null background AND the screen-pass clip flags. Bloom is skipped
 *     in this mode (not alpha-safe over page content); SSAA still runs for
 *     crisp edges.
 *   data-webgi-configurator — enable the WebGI MaterialConfiguratorPlugin
 *     (material/finish variants authored into the GLB). Optional
 *     data-webgi-configurator-container="<element id>" relocates the
 *     configurator UI into that container (ported from the turntable
 *     template's MutationObserver approach).
 *
 * Behavior kept from the original implementation:
 *   - WebGL capability probe; reduced settings on old GPUs (no MSAA/Bloom,
 *     0.75 render scale on PowerVR/SGX-class devices). SSAO is dropped
 *     everywhere: it drew a dark dashed halo around model silhouettes.
 *   - waits until the canvas is actually visible before initializing
 *     (responsive CSS hides it on mobile; tablets apply CSS late)
 *   - touch devices: zoom enabled, pan disabled; desktop: zoom and pan
 *     disabled (rotate only)
 *   - re-checks on resize (tablet rotation can reveal the canvas)
 */

/** Probe WebGL support and flag older GPUs (PowerVR SGX-era iPads etc.). */
function checkWebGLCapabilities()
{
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if(!gl)
        return { supported: false }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : ''
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)

    const isOldDevice = renderer.includes('PowerVR')
        || renderer.includes('SGX')
        || maxTextureSize < 2048

    return { supported: true, isOldDevice, renderer }
}

/** Move the MaterialConfiguratorPlugin's floating UI into a page container
 *  (the plugin appends to <body>). Ported from the turntable template: watch
 *  for the UI to appear, then reparent and pin it inside the container. */
function relocateConfiguratorUi(containerId)
{
    const container = document.getElementById(containerId)
    if(!container)
        return

    const selectors = [
        '[class*="material-configurator"]',
        '[class*="MaterialConfigurator"]',
        '[class*="configurator-ui"]',
        '[id*="configurator"]',
        '.tp-root'
    ]

    const observer = new MutationObserver(() =>
    {
        for(const selector of selectors)
        {
            const ui = document.querySelector(selector)
            if(!ui || container.contains(ui))
                continue

            container.appendChild(ui)
            if(window.getComputedStyle(ui).position === 'static')
                ui.style.position = 'absolute'
            if(!ui.style.top && !ui.style.bottom)
                ui.style.top = '10px'
            if(!ui.style.right && !ui.style.left)
                ui.style.right = '10px'
            ui.style.zIndex = '1000'
            ui.style.overflow = 'hidden'
        }
    })
    observer.observe(document.body, { childList: true, subtree: true })
}

async function initViewer(canvas)
{
    if(canvas.__webgiViewer)
        return

    const src = canvas.dataset.webgiModel
    if(!src)
    {
        console.warn('WebGI canvas has no data-webgi-model attribute', canvas)
        return
    }

    const webglCaps = checkWebGLCapabilities()
    if(!webglCaps.supported)
    {
        console.warn('WebGL is not supported on this device')
        return
    }

    // Reduced settings for older devices.
    const useMSAA = !webglCaps.isOldDevice
    const renderScale = webglCaps.isOldDevice ? 0.75 : 'auto'

    const transparent = canvas.hasAttribute('data-webgi-transparent')

    const viewer = new ThreeViewer({
        canvas,
        renderScale,
        msaa: useMSAA,
        ...(transparent ? { rgbm: false, backgroundColor: null } : {})
    })
    canvas.__webgiViewer = viewer

    /** Transparent mode: null the background and clip it in the screen pass —
     *  re-asserted after load, which can touch the background. */
    const applyTransparency = () =>
    {
        viewer.scene.background = null
        viewer.scene.backgroundColor = null
        const screenPass = viewer.renderManager && viewer.renderManager.screenPass
        if(screenPass)
        {
            screenPass.clipBackground = true
            screenPass.clipBackgroundForce = true
        }
    }

    // Plugins, each tolerated to fail on constrained devices.
    try { await viewer.addPlugin(GBufferPlugin) }
    catch(e) { console.warn('GBufferPlugin failed to load:', e) }

    try { await viewer.addPlugin(SSAAPlugin) }
    catch(e) { console.warn('SSAAPlugin failed to load:', e) }

    if(!webglCaps.isOldDevice && !transparent)
    {
        // Bloom is resource-intensive on older GPUs and not alpha-safe over a
        // transparent canvas. (No SSAO: against the empty background its
        // occlusion sampling drew a dark dashed halo around the model's
        // silhouette — the amp screenshot artifact.)
        try { await viewer.addPlugin(BloomPlugin) }
        catch(e) { console.warn('BloomPlugin failed to load:', e) }
    }

    if(canvas.hasAttribute('data-webgi-configurator'))
    {
        // Material/finish variants authored into the GLB (WebGI editor).
        // Added before load so the model's configurator config applies.
        try
        {
            const configurator = viewer.addPluginSync(new MaterialConfiguratorPlugin())
            configurator.enableEditContextMenus = true
            configurator.animateApply = true
            configurator.animateApplyDuration = 1000
            if(canvas.dataset.webgiConfiguratorContainer)
                relocateConfiguratorUi(canvas.dataset.webgiConfiguratorContainer)
        }
        catch(e) { console.warn('MaterialConfiguratorPlugin failed to load:', e) }
    }

    if(transparent)
        applyTransparency()
    else
        await viewer.scene.setBackgroundColor(canvas.dataset.webgiBackground || '#F8FBFF')

    try
    {
        await viewer.load(src, {
            setBackground: false,
            autoCenter: true,
            autoScale: true
        })

        if(transparent)
            applyTransparency()

        const controls = viewer.scene.mainCamera.controls
        if(controls)
        {
            // Drag to rotate; pan stays off. Zoom only on touch (mouse-wheel
            // zoom would hijack page scroll on desktop).
            controls.enableRotate = true
            controls.autoRotate = false
            controls.enablePan = false
            controls.enableZoom = 'ontouchstart' in document.documentElement
        }
    }
    catch(error)
    {
        console.error('Error loading 3D model:', error)
    }
}

/** Init a canvas once it exists AND is visible (responsive CSS may hide it). */
function waitForCanvas(canvas)
{
    if(canvas.__webgiViewer || canvas.__webgiWaiting)
        return
    canvas.__webgiWaiting = true

    const attempt = () =>
    {
        const style = window.getComputedStyle(canvas)
        const rect = canvas.getBoundingClientRect()

        if(style.display === 'none' || style.visibility === 'hidden' || rect.width === 0 || rect.height === 0)
        {
            // Hidden (likely mobile) — recheck; tablets can apply CSS late.
            window.setTimeout(attempt, 200)
            return
        }

        canvas.__webgiWaiting = false
        initViewer(canvas)
    }

    attempt()
}

function scan()
{
    for(const canvas of document.querySelectorAll('canvas[data-webgi-model]'))
    {
        waitForCanvas(canvas)
    }
}

if(document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', scan)
}
else
{
    scan()
}

// Handles tablet rotation / window resizing revealing a hidden canvas.
let resizeTimeout
window.addEventListener('resize', () =>
{
    window.clearTimeout(resizeTimeout)
    resizeTimeout = window.setTimeout(scan, 250)
})
