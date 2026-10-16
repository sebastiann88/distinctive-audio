import * as THREE from 'three'

import Sizes from './Utils/Sizes.js'

import Resources from './Resources.js'
import Renderer from './Renderer.js'
import Camera from './Camera.js'
import World from './World.js'
import Motion from './Motion.js'

import assets from './assets.js'

/**
 * Central singleton orchestrator (Bruno Simon's "complex" template pattern).
 *
 * Every sub-class calls `new Experience()` to get this same instance and pulls
 * the shared services it needs (scene, camera, sizes, time, resources, debug).
 * This is why there is no dependency-injection plumbing anywhere else: the
 * singleton IS the injector.
 *
 * Manifest integration: the constructor accepts an optional `assets` array and
 * a `sceneConfig` object. The page embeds a JSON manifest that index.js reads
 * and forwards here, so the same JS bundle drives different scenes on different
 * URLs without a rebuild (static HTML now; a CMS emits the same shape later).
 * When nothing is passed we fall back to the bundled `assets.js` so the template
 * still runs standalone.
 */
export default class Experience
{
    static instance

    constructor(_options = {})
    {
        if(Experience.instance)
        {
            return Experience.instance
        }
        Experience.instance = this

        // Options
        this.targetElement = _options.targetElement
        this.assets = _options.assets ?? assets
        this.sceneConfig = _options.sceneConfig ?? {}
        // Debug tooling (lil-gui + stats) is dynamically imported by index.js
        // ONLY under the #debug hash, so production visitors never download it.
        this.debugTools = _options.debugTools ?? null

        // Shared, plain state that GSAP writes (in Motion) and World reads (in
        // update()). This is the seam that keeps a SINGLE render loop: GSAP owns
        // the animation values, the Experience owns the drawing.
        this.sceneState = { scrollProgress: 0 }

        // Render-on-demand: the scene is entirely scroll-driven, so a GPU frame
        // is only needed when scrollProgress moved (or something asked for one
        // via needsRender — resize, world build). The rAF loop keeps ticking
        // cheaply; only renderer.update() is skipped.
        this.needsRender = true
        this.lastRenderedProgress = -1

        // ADAPTIVE QUALITY: once the page reveals, render flat-out for ~2 s
        // and read the real frame times. Struggling machines shed the light
        // SSR pass first (falling back to the mirror-clone reflections), and
        // only then pixel ratio — one calibration pass, one-way steps. See
        // runAdaptiveQuality().
        this.qualityPhase = 'waiting'
        this.qualitySamples = []
        this.lastQualityTime = 0
        const beginCalibration = () => { this.qualityPhase = 'warmup' }
        window.addEventListener('page:revealed', beginCalibration, { once: true })
        // Fallback (dev harness without the page loader).
        window.setTimeout(beginCalibration, 8000)

        if(!this.targetElement)
        {
            console.warn('Missing \'targetElement\' property')
            return
        }

        this.sizes = new Sizes()
        this.setConfig()
        this.setDebug()
        this.setStats()
        this.setScene()
        this.setCamera()
        this.setRenderer()
        this.setResources()
        this.setWorld()
        this.setMotion()

        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        this.update()
    }

    setConfig()
    {
        this.config = {}

        // Debug — opt in with the #debug hash so production never ships the GUI
        this.config.debug = window.location.hash === '#debug'

        // Honour the user's reduced-motion preference. World.js can read this to
        // fall back to a static frame, which also protects Core Web Vitals.
        this.config.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // Pixel ratio — clamped to 1.35 (ruthless perf pass, down from 1.5):
        // fill rate scales with the SQUARE of this, so 1.35 renders ~19%
        // fewer pixels than 1.5 per frame. On the pale, soft-shadowed scene
        // with native MSAA the retina difference doesn't read; the scroll
        // smoothness does. All text is DOM, so type stays razor sharp.
        // pixelRatioCap can be lowered once by adaptive quality (see update).
        this.pixelRatioCap ??= 1.35
        this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), this.pixelRatioCap)

        // Width and height come from the mount element, NOT the window. The mount
        // may be full-viewport (fixed inset-0) or a box; either way the canvas
        // fills it, which keeps the experience embeddable rather than hard-coded
        // to the window.
        const boundings = this.targetElement.getBoundingClientRect()
        this.config.width = boundings.width
        this.config.height = boundings.height || window.innerHeight
    }

    setDebug()
    {
        if(this.config.debug && this.debugTools)
        {
            this.debug = new this.debugTools.GUI()
        }
    }

    setStats()
    {
        if(this.config.debug && this.debugTools)
        {
            this.stats = new this.debugTools.Stats(true)
        }
    }

    setScene()
    {
        this.scene = new THREE.Scene()
    }

    setCamera()
    {
        this.camera = new Camera()
    }

    setRenderer()
    {
        this.renderer = new Renderer({ rendererInstance: this.rendererInstance })

        this.targetElement.appendChild(this.renderer.instance.domElement)
    }

    setResources()
    {
        this.resources = new Resources(this.assets)
    }

    setWorld()
    {
        this.world = new World()
    }

    setMotion()
    {
        this.motion = new Motion()
    }

    /** One calibration pass, one-way degradation. Runs inside the rAF loop:
     *  30 warmup frames (JIT/GC settle), 90 sampled frames, all forced to
     *  render so the deltas measure the REAL full-pipeline cost. Hidden tabs
     *  pause sampling (rAF throttling would read as a slow GPU). */
    runAdaptiveQuality()
    {
        if(this.qualityPhase === 'waiting' || this.qualityPhase === 'done')
            return
        if(!this.world?.built || document.hidden)
            return

        this.needsRender = true

        const now = performance.now()
        const delta = now - this.lastQualityTime
        this.lastQualityTime = now
        if(delta > 250)
            return // first frame, tab switch or long stall — not a GPU signal

        if(this.qualityPhase === 'warmup')
        {
            if(this.qualitySamples.push(delta) >= 30)
            {
                this.qualityPhase = 'sampling'
                this.qualitySamples = []
            }
            return
        }

        this.qualitySamples.push(delta)
        if(this.qualitySamples.length < 90)
            return

        this.qualityPhase = 'done'
        this.qualitySamples.sort((a, b) => a - b)
        const median = this.qualitySamples[45]
        this.qualitySamples = []

        if(median <= 20)
            return // holds ~50+ fps with the current pipeline

        // If SSR is somehow active (debug toggle left on), shed it first: it
        // re-renders the scene for its beauty + normal + metalness prepasses
        // and ray-marches every reflective pixel, so it dominates the optional
        // per-frame cost. The mirror-clone fallback reflections come back, so
        // the floor stays alive. SSR is off by default, so this normally no-ops
        // and we fall straight through to fill rate.
        if(this.renderer.useSSR && this.renderer.ssrPass)
        {
            this.renderer.setSSREnabled(false)
            this.world?.syncMirrorReflections?.()
            console.info(`[experience] adaptive quality: SSR off (median frame ${median.toFixed(1)}ms)`)

            if(median <= 30)
                return // dropping SSR alone buys the headroom back
        }

        // Still struggling (or SSR was never the cost): shed fill rate.
        // Severe cases go straight to 1x.
        this.pixelRatioCap = median > 40 ? 1 : 1.15
        this.resize()
        console.info(`[experience] adaptive quality: pixel ratio capped at ${this.pixelRatioCap}`)
    }

    update()
    {
        if(this.stats)
            this.stats.update()

        this.runAdaptiveQuality()

        // World first: it positions the camera rig from scrollProgress. Camera
        // then copies the rig into the render camera the SAME frame — with
        // render-on-demand there may be no "next frame" render to catch up.
        if(this.world)
            this.world.update()

        this.camera.update()

        // Debug mode renders every frame (orbit controls move the camera outside
        // sceneState); production renders only when the scroll-driven state
        // changed or a render was explicitly requested.
        const dirty = this.needsRender
            || this.config.debug
            || this.sceneState.scrollProgress !== this.lastRenderedProgress

        if(this.renderer && dirty)
        {
            this.renderer.update()
            this.lastRenderedProgress = this.sceneState.scrollProgress
            this.needsRender = false
        }

        this.animationFrame = window.requestAnimationFrame(() =>
        {
            this.update()
        })
    }

    resize()
    {
        // Config
        const boundings = this.targetElement.getBoundingClientRect()
        this.config.width = boundings.width
        this.config.height = boundings.height

        this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), this.pixelRatioCap ?? 1.35)

        if(this.camera)
            this.camera.resize()

        if(this.renderer)
            this.renderer.resize()

        if(this.world)
            this.world.resize()

        this.needsRender = true
    }

    destroy()
    {
        // Stop the loop first so nothing renders against disposed resources.
        if(this.animationFrame)
            window.cancelAnimationFrame(this.animationFrame)

        this.sizes?.destroy()

        this.motion?.destroy()
        this.world?.destroy()
        this.camera?.destroy()
        this.renderer?.destroy()
        this.resources?.destroy()

        if(this.debug)
            this.debug.destroy()

        // Detach the canvas and release the singleton so a fresh mount is clean.
        this.renderer?.instance?.domElement?.remove()
        Experience.instance = null
    }
}
