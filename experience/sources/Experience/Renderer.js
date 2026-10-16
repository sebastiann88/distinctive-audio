import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import Experience from './Experience.js'

/**
 * WebGL renderer — direct single-pass render. Screen-space reflections are
 * available but OFF BY DEFAULT (perf): the floor reflection is carried by the
 * mirror-clone fallback in World instead.
 *
 * Why SSR is off: on weaker GPUs SSRPass re-renders the scene for its beauty +
 * normal + metalness prepasses and then ray-marches every reflective pixel.
 * That fill-rate cost dominates the frame and, because the homepage is one
 * scroll-choreographed canvas, it dragged the whole page (including scroll)
 * into a stutter on lower-end hardware. The direct single-pass path plus the
 * mirror-clone reflections look nearly identical while staying cheap.
 *
 * The SSR chain (composer [SSRPass → OutputPass], a 4x-MSAA half-float render
 * target, and the pass's own beauty+depth buffers) is therefore NOT allocated
 * in production at all — setPostProcess only builds it under the #debug hash,
 * where a GUI toggle can switch it on for inspection. SSRPass renders beauty
 * itself (no RenderPass in front) into the MSAA half-float target, and
 * OutputPass applies the same NeutralToneMapping + sRGB the direct path gets
 * for free. The pass is selective — World hands it the floor + its overlays
 * (setSSRSelects) — and quiet (low opacity, short rays).
 *
 * Whenever SSR is OFF — the default, or the debug toggle — update() takes the
 * single-pass direct path with zero composer overhead, and
 * World.syncMirrorReflections keeps the mirror-clone fallback reflections
 * visible.
 *
 * FIREFOX: SSR requires resolving the 4x-MSAA beauty target's depth into
 * SSRPass's depth TEXTURE. Firefox rejects that blitFramebuffer
 * (INVALID_OPERATION), and the failed blit takes the color resolve down with
 * it — every model vanishes and only the clear color survives.
 * setPostProcess probes the exact target shape once at startup and skips
 * building the chain where the resolve is unsupported, so those browsers
 * keep the mirror-clone look instead of a blank scene.
 */
export default class Renderer
{
    constructor(_options = {})
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.debug = this.experience.debug
        this.stats = this.experience.stats
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        // Floor reflections via SSRPass — OFF by default (see class comment).
        // The mirror-clone fallback in World does the reflecting. Only the
        // #debug build allocates the SSR chain so it can be toggled on; the
        // Firefox depth-resolve probe and adaptive quality can also force it
        // off, but it never starts on in production.
        this.useSSR = false

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('renderer')
        }

        this.setInstance()
        this.setPostProcess()
    }

    setInstance()
    {
        // Ground color comes from the manifest seam (sceneConfig), not a hardcode,
        // so a CMS can re-theme the scene without a JS rebuild.
        this.clearColor = this.experience.sceneConfig?.clearColor ?? '#010101'

        this.instance = new THREE.WebGLRenderer({
            alpha: false,
            antialias: true,
            powerPreference: 'high-performance'
        })
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        // Shadows re-render ONLY when the key light moves (World flips
        // needsUpdate as it tracks the vignettes): every mesh is static, so
        // re-rendering the shadow map each frame is pure waste while the
        // camera holds inside a section.
        this.instance.shadowMap.autoUpdate = false
        this.instance.shadowMap.needsUpdate = true
        this.instance.domElement.style.position = 'absolute'
        this.instance.domElement.style.top = 0
        this.instance.domElement.style.left = 0
        this.instance.domElement.style.width = '100%'
        this.instance.domElement.style.height = '100%'

        this.instance.setClearColor(this.clearColor, 1)
        this.instance.setSize(this.config.width, this.config.height)
        this.instance.setPixelRatio(this.config.pixelRatio)

        // r152+ color management. SRGBColorSpace is the default output, but we set
        // it explicitly so the intent is obvious and copy-paste-safe.
        this.instance.outputColorSpace = THREE.SRGBColorSpace
        // Neutral (Khronos PBR) tone mapping: compresses highlights so the pale
        // gallery can't clip to a white void, while keeping product colors
        // faithful (ACES would desaturate the brass and wood).
        this.instance.toneMapping = THREE.NeutralToneMapping
        this.instance.toneMappingExposure = 1

        this.context = this.instance.getContext()

        if(this.stats)
        {
            this.stats.setRenderPanel(this.context)
        }

        if(this.debug)
        {
            this.debugFolder
                .addColor(this, 'clearColor')
                .onChange(() =>
                {
                    this.instance.setClearColor(this.clearColor)
                })

            this.debugFolder
                .add(this.instance, 'toneMapping', {
                    NoToneMapping: THREE.NoToneMapping,
                    LinearToneMapping: THREE.LinearToneMapping,
                    ReinhardToneMapping: THREE.ReinhardToneMapping,
                    CineonToneMapping: THREE.CineonToneMapping,
                    ACESFilmicToneMapping: THREE.ACESFilmicToneMapping,
                    AgXToneMapping: THREE.AgXToneMapping
                })
                .onChange(() =>
                {
                    this.scene.traverse((_child) =>
                    {
                        if(_child instanceof THREE.Mesh)
                            _child.material.needsUpdate = true
                    })
                })

            this.debugFolder
                .add(this.instance, 'toneMappingExposure')
                .min(0)
                .max(10)
        }
    }

    setPostProcess()
    {
        // SSR is off by default (see class comment / constructor), so the
        // whole chain — composer, MSAA half-float render target, and the pass's
        // beauty+depth buffers — is only built under the #debug hash where it
        // can be toggled on. Production never allocates any of it. (Firefox
        // can't resolve a multisampled depth attachment into a depth texture,
        // so even in debug we probe first and skip the build where it fails.)
        if(!this.debug || !this.supportsMultisampledDepthResolve())
            return

        const width = this.config.width * this.config.pixelRatio
        const height = this.config.height * this.config.pixelRatio

        // MSAA target: the composer renders into this instead of the canvas,
        // so the context's `antialias: true` no longer applies — samples here
        // bring the edge quality back. Half-float keeps tone mapping input
        // linear/HDR for the OutputPass.
        const renderTarget = new THREE.WebGLRenderTarget(width, height, {
            samples: 4,
            type: THREE.HalfFloatType
        })

        this.composer = new EffectComposer(this.instance, renderTarget)
        this.composer.setPixelRatio(this.config.pixelRatio)
        this.composer.setSize(this.config.width, this.config.height)

        // Selective SSR: starts with an empty selection (no reflective
        // pixels); World hands over the floor + its overlays once the scene
        // is built. SSRPass renders beauty itself, so it is the FIRST pass —
        // no RenderPass sits in front of it.
        this.ssrPass = new SSRPass({
            renderer: this.instance,
            scene: this.scene,
            camera: this.camera.instance,
            width: width,
            height: height,
            selects: []
        })
        // The composer target's MSAA doesn't cover SSR's internal beauty
        // render — move the samples onto its target (r16x resolves
        // multisampled color AND depth into its textures).
        this.ssrPass.beautyRenderTarget.samples = 4
        // 24-bit depth for that beauty target: the stock pass ships a 16-bit
        // depth texture, whose ~5 mm quanta at vignette distance z-fight the
        // GLBs' near-coplanar shells (the amp's wood sleeve sits ~0.05 mm
        // above its chassis top) into dark dashed stripes along the seams.
        this.ssrPass.beautyRenderTarget.depthTexture.type = THREE.UnsignedIntType
        // Scene scale is meters: rays reach up the lower half of the speakers
        // and let the reflections carry further across the open floor before
        // attenuation fades them — still nothing like the shader's 180-unit
        // default.
        this.ssrPass.maxDistance = 6
        // Depth tolerance for ray hits — a few cm keeps thin brass feet from
        // smearing without swallowing real depth gaps.
        this.ssrPass.thickness = 0.04
        // A clearly visible polished-concrete reflection, but still not a hard
        // mirror. Fresnel + distance attenuation (both default-on) keep it
        // strongest at grazing angles near the object bases and ramp it down
        // across the open floor.
        this.ssrPass.opacity = 0.4

        this.outputPass = new OutputPass()

        this.composer.addPass(this.ssrPass)
        this.composer.addPass(this.outputPass)

        if(this.debug)
        {
            const ssrFolder = this.debugFolder.addFolder('screen space reflections')
            const rerender = () => { this.experience.needsRender = true }

            ssrFolder
                .add(this, 'useSSR')
                .name('enabled')
                .onChange(() =>
                {
                    // The mirror-clone fallback reflections must come back
                    // when SSR goes, and hide when it returns.
                    this.experience.world?.syncMirrorReflections?.()
                    this.experience.needsRender = true
                })

            ssrFolder.add(this.ssrPass, 'opacity').min(0).max(1).step(0.01).onChange(rerender)
            ssrFolder.add(this.ssrPass, 'maxDistance').min(0.5).max(20).step(0.1).onChange(rerender)
            ssrFolder.add(this.ssrPass, 'thickness').min(0.005).max(0.2).step(0.001).onChange(rerender)
            ssrFolder.add(this.ssrPass, 'blur').onChange(rerender)
            ssrFolder.add(this.ssrPass, 'fresnel').onChange(rerender)
            ssrFolder.add(this.ssrPass, 'distanceAttenuation').onChange(rerender)
            ssrFolder
                .add(this.ssrPass, 'output', {
                    'Default (beauty + SSR)': SSRPass.OUTPUT.Default,
                    'SSR only': SSRPass.OUTPUT.SSR,
                    'Beauty': SSRPass.OUTPUT.Beauty,
                    'Depth': SSRPass.OUTPUT.Depth,
                    'Normal': SSRPass.OUTPUT.Normal,
                    'Metalness mask': SSRPass.OUTPUT.Metalness
                })
                .onChange(rerender)
        }
    }

    /** Probes whether the driver can blit-resolve a multisampled depth
     *  attachment into a depth texture, using the exact shape of SSRPass's
     *  beauty target (4x MSAA, half-float color, 24-bit depth texture — the
     *  type upgrade applied in setPostProcess).
     *  Rendering — even an empty scene — triggers the resolve blit at the
     *  end of WebGLRenderer.render, so a GL error here is the same failure
     *  that would blank the real frame. Chrome accepts the blit; Firefox
     *  raises INVALID_OPERATION. */
    supportsMultisampledDepthResolve()
    {
        const gl = this.context

        const depthTexture = new THREE.DepthTexture(4, 4)
        depthTexture.type = THREE.UnsignedIntType

        const target = new THREE.WebGLRenderTarget(4, 4, {
            samples: 4,
            type: THREE.HalfFloatType,
            depthTexture: depthTexture
        })

        while(gl.getError() !== gl.NO_ERROR) { /* drain stale errors */ }

        this.instance.setRenderTarget(target)
        this.instance.render(new THREE.Scene(), new THREE.PerspectiveCamera())
        this.instance.setRenderTarget(null)

        const supported = gl.getError() === gl.NO_ERROR

        target.dispose()
        depthTexture.dispose()

        return supported
    }

    /** World hands the reflective floor surfaces over once the scene is built
     *  (the pass is created before any mesh exists — the manifest seam means
     *  the scene arrives async). */
    setSSRSelects(meshes)
    {
        if(this.ssrPass)
            this.ssrPass.selects = meshes
    }

    /** Flip SSR (adaptive quality + debug GUI). Callers restore the
     *  mirror-clone fallback via world.syncMirrorReflections(). */
    setSSREnabled(on)
    {
        if(!this.ssrPass)
            return
        this.useSSR = on
        this.experience.needsRender = true
    }

    resize()
    {
        this.instance.setSize(this.config.width, this.config.height)
        this.instance.setPixelRatio(this.config.pixelRatio)

        if(this.composer)
        {
            this.composer.setPixelRatio(this.config.pixelRatio)
            this.composer.setSize(this.config.width, this.config.height)
        }
    }

    update()
    {
        if(this.stats)
        {
            this.stats.beforeRender()
        }

        if(this.useSSR && this.composer)
        {
            this.composer.render()
        }
        else
        {
            this.instance.render(this.scene, this.camera.instance)
        }

        if(this.stats)
        {
            this.stats.afterRender()
        }
    }

    destroy()
    {
        this.ssrPass?.dispose()
        this.outputPass?.dispose()
        this.composer?.dispose()
        this.instance.renderLists.dispose()
        this.instance.dispose()
    }
}
