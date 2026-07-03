import './style.css'
import Experience from './Experience/Experience.js'

/**
 * Entry point and manifest bridge.
 *
 * This file does three jobs that keep the experience SEO- and CWV-safe:
 *
 * 1. READ THE MANIFEST. The page renders semantic HTML, then embeds a JSON
 *    manifest in a <script type="application/json"> tag (static HTML here; a CMS
 *    later emits the identical shape). We parse it and hand the assets +
 *    sceneConfig to the Experience. Same bundle, per-URL scene.
 *
 * 2. DEGRADE GRACEFULLY. The mount ships a CSS-only minimalist loader that
 *    covers it from first paint. If WebGL is unavailable we add .no-webgl and
 *    the loader hides, leaving the mount as a quiet pale background. The
 *    content around the canvas — the part search indexes — is untouched.
 *
 * 3. DEFER THE MOUNT. We only boot the Experience when the mount scrolls into
 *    view (IntersectionObserver). Heavy WebGL work stays off the critical path,
 *    so Largest Contentful Paint stays fast even on 3D-heavy pages.
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
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    }
    catch(error)
    {
        return false
    }
}

function boot(mountEl)
{
    const manifest = readManifest(mountEl)

    const experience = new Experience({
        targetElement: mountEl,
        assets: manifest.assets,       // undefined -> Experience falls back to assets.js
        sceneConfig: manifest.sceneConfig
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
    if(window.location.hash === '#debug')
    {
        window.__experience = experience
    }

    return experience
}

document.querySelectorAll('[data-experience]').forEach((mountEl) =>
{
    if(!supportsWebGL())
    {
        mountEl.classList.add('no-webgl') // CSS hides the loader; pale field stays
        return
    }

    // Defer until visible. rootMargin gives us a head start so it's ready by the
    // time it's actually on screen, without loading everything up front.
    const observer = new IntersectionObserver((entries, obs) =>
    {
        entries.forEach((entry) =>
        {
            if(entry.isIntersecting)
            {
                obs.disconnect()
                boot(mountEl)
            }
        })
    }, { rootMargin: '200px' })

    observer.observe(mountEl)
})
