import { ThreeViewer, GBufferPlugin, SSAAPlugin, SSAOPlugin } from 'threepipe'
import { BloomPlugin } from '@threepipe/webgi-plugins'

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
 * page is rendered by Craft. Optional attributes:
 *   data-webgi-background — scene background color (default #F8FBFF)
 *
 * Behavior kept from the original implementation:
 *   - WebGL capability probe; reduced settings on old GPUs (no MSAA/SSAO/
 *     Bloom, 0.75 render scale on PowerVR/SGX-class devices)
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

    const viewer = new ThreeViewer({
        canvas,
        renderScale,
        msaa: useMSAA
    })
    canvas.__webgiViewer = viewer

    // Plugins, each tolerated to fail on constrained devices.
    try { await viewer.addPlugin(GBufferPlugin) }
    catch(e) { console.warn('GBufferPlugin failed to load:', e) }

    try { await viewer.addPlugin(SSAAPlugin) }
    catch(e) { console.warn('SSAAPlugin failed to load:', e) }

    if(!webglCaps.isOldDevice)
    {
        // SSAO and Bloom are resource-intensive on older GPUs.
        try { await viewer.addPlugin(SSAOPlugin) }
        catch(e) { console.warn('SSAOPlugin failed to load:', e) }

        try { await viewer.addPlugin(BloomPlugin) }
        catch(e) { console.warn('BloomPlugin failed to load:', e) }
    }

    await viewer.scene.setBackgroundColor(canvas.dataset.webgiBackground || '#F8FBFF')

    try
    {
        await viewer.load(src, {
            setBackground: false,
            autoCenter: true,
            autoScale: true
        })

        const controls = viewer.scene.mainCamera.controls
        if(controls)
        {
            if('ontouchstart' in document.documentElement)
            {
                controls.enableZoom = true
                controls.enablePan = false
            }
            else
            {
                controls.enableZoom = false
                controls.enablePan = false
            }
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
