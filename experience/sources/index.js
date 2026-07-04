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
    // the GUI folders exist from the first frame. OrbitControls rides along —
    // the Camera builds its debug rig only when this bundle delivered it.
    let debugTools = null
    if(window.location.hash === '#debug')
    {
        const [{ default: GUI }, { default: Stats }, { OrbitControls }] = await Promise.all([
            import('lil-gui'),
            import('./Experience/Utils/Stats.js'),
            import('three/addons/controls/OrbitControls.js')
        ])
        debugTools = { GUI, Stats, OrbitControls }
    }

    const experience = new Experience({
        targetElement: mountEl,
        assets: manifest.assets,       // undefined -> Experience falls back to assets.js
        sceneConfig: manifest.sceneConfig,
        debugTools
    })

    // Report asset progress to the page loader (js/script.js): the full-page
    // overlay holds the whole document until the scene is ready, so its bar
    // should move with the heaviest downloads — the models.
    experience.resources.on('progress', (group) =>
    {
        window.dispatchEvent(new CustomEvent('experience:progress', {
            detail: { ratio: group.toLoad ? group.loaded / group.toLoad : 1 }
        }))
    })

    // Release the page loader only once the scene has actually drawn:
    // resources 'end' fires after every group loads (World builds on the base
    // group), and two rAFs guarantee at least one update() pass has rendered
    // the built world. Signalling at boot instead would reveal the clear color
    // while assets load — the page appears before the experience exists. If
    // loading fails the event never fires and the loader stays up until its
    // safety timeout — honest feedback.
    experience.resources.on('end', () =>
    {
        window.requestAnimationFrame(() =>
        {
            window.requestAnimationFrame(() =>
            {
                mountEl.classList.add('is-live')
                window.dispatchEvent(new CustomEvent('experience:ready'))
            })
        })
    })

    // When the loader slides away it removes the scroll lock — the scrollbar
    // (re)appears and every trigger position shifts, so remeasure.
    window.addEventListener('page:revealed', () =>
    {
        experience.motion?.refresh()
    }, { once: true })

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
        // Back to the static document (poster hero, flowing sections). Tell
        // the page loader so it stops waiting for scene assets that will
        // never load (its experience gate re-checks .experience-on).
        document.documentElement.classList.remove('experience-on')
        window.dispatchEvent(new CustomEvent('experience:ready'))
        return
    }

    boot(mountEl)
})
