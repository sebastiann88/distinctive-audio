import './style.css'
import Experience from './Experience/Experience.js'

/**
 * Entry point and manifest bridge.
 *
 * This module is only ever loaded by the page's inline capability gate: the
 * gate adds `.experience-on` to <html> and injects this script ONLY on
 * viewports ≥1024px with WebGL, no reduced-motion preference, and no obvious
 * low-end hardware signals. Phones, tablets and older machines never download
 * the bundle at all — they get the static document with the poster image
 * (the base layout; see site/index.html).
 *
 * What this file still does:
 *
 * 1. READ THE MANIFEST. The page renders semantic HTML, then embeds a JSON
 *    manifest in a <script type="application/json"> tag (static HTML here; a CMS
 *    later emits the identical shape). We parse it and hand the assets +
 *    sceneConfig to the Experience. Same bundle, per-URL scene.
 *
 * 2. DEGRADE GRACEFULLY. If WebGL turns out to be unusable anyway, we drop the
 *    page back to the static document by removing `.experience-on` — the same
 *    complete, readable page every non-WebGL visitor gets.
 *
 * 3. DEBUG ON DEMAND. lil-gui + stats are dynamic imports behind the #debug
 *    hash, so production visitors never download the tooling.
 */

function readManifest(mountEl)
{
    const script = mountEl.querySelector('script[type="application/json"][data-experience-manifest]')
    if(!script)
        return {}

    try
    {
        return JSON.parse(script.textContent)
    }
    catch(error)
    {
        console.warn('Invalid experience manifest JSON', error)
        return {}
    }
}

function supportsWebGL()
{
    try
    {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')))
    }
    catch(error)
    {
        return false
    }
}

async function boot(mountEl)
{
    const manifest = readManifest(mountEl)

    // #debug only: pull the debug tooling BEFORE the experience constructs so
    // the GUI folders exist from the first frame.
    let debugTools = null
    if(window.location.hash === '#debug')
    {
        const [{ default: GUI }, { default: Stats }] = await Promise.all([
            import('lil-gui'),
            import('./Experience/Utils/Stats.js')
        ])
        debugTools = { GUI, Stats }
    }

    const experience = new Experience({
        targetElement: mountEl,
        assets: manifest.assets,       // undefined -> Experience falls back to assets.js
        sceneConfig: manifest.sceneConfig,
        debugTools
    })

    // Crossfade the loader only once the scene has actually drawn: resources
    // 'end' fires after every group loads (World builds on the base group), and
    // two rAFs guarantee at least one update() pass has rendered the built
    // world. Fading at boot instead shows the clear color while assets load —
    // the loader vanishes before the experience exists. If loading fails the
    // listener never fires and the loader keeps sweeping — honest feedback.
    experience.resources.on('end', () =>
    {
        window.requestAnimationFrame(() =>
        {
            window.requestAnimationFrame(() =>
            {
                mountEl.classList.add('is-live')

                // Drop the faded loader so it's not a lingering composited
                // layer over the canvas (transition is 0.8s).
                const loader = mountEl.querySelector('.experience__loader')
                if(loader)
                    window.setTimeout(() => loader.remove(), 1000)
            })
        })
    })

    // Expose for debugging only (#debug hash) — not part of the public seam.
    if(debugTools)
    {
        window.__experience = experience
    }

    return experience
}

document.querySelectorAll('[data-experience]').forEach((mountEl) =>
{
    if(!supportsWebGL())
    {
        // Back to the static document (poster hero, flowing sections).
        document.documentElement.classList.remove('experience-on')
        return
    }

    boot(mountEl)
})
