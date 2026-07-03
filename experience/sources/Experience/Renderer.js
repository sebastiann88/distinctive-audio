import * as THREE from 'three'
import Experience from './Experience.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

/**
 * WebGL renderer + optional post-processing composer.
 *
 * MODERNIZED from Bruno's r141 original for current Three.js (r152+). See
 * references/threejs-modernization.md for the full mapping. Summary of changes:
 *   - `physicallyCorrectLights = true`  -> removed (it is the default now)
 *   - `outputEncoding = sRGBEncoding`   -> `outputColorSpace = SRGBColorSpace`
 *   - render target `format: RGBFormat` -> removed (RGBFormat no longer exists)
 *   - render target `encoding: ...`     -> `type: HalfFloatType` + OutputPass
 *   - tone mapping in post-processing    -> handled by OutputPass, not the renderer
 *
 * The structure (instance + composer, `usePostprocess` toggle, debug folder,
 * disposal in destroy) is exactly Bruno's.
 */
export default class Renderer
{
    constructor(_options = {})
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.debug = this.experience.debug
        this.stats = this.experience.stats
        this.time = this.experience.time
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('renderer')
        }

        this.usePostprocess = false

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
            antialias: true
        })
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
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
        this.instance.toneMapping = THREE.NoToneMapping
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
        this.postProcess = {}

        // Render pass
        this.postProcess.renderPass = new RenderPass(this.scene, this.camera.instance)

        // Effect composer. The render target uses HalfFloatType — the current
        // default for post-processing — so color math stays high-precision until
        // the final pass. Insert your custom passes between renderPass and
        // outputPass.
        this.renderTarget = new THREE.WebGLRenderTarget(
            this.config.width,
            this.config.height,
            {
                generateMipmaps: false,
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                type: THREE.HalfFloatType,
                samples: 2
            }
        )
        this.postProcess.composer = new EffectComposer(this.instance, this.renderTarget)
        this.postProcess.composer.setSize(this.config.width, this.config.height)
        this.postProcess.composer.setPixelRatio(this.config.pixelRatio)

        this.postProcess.composer.addPass(this.postProcess.renderPass)

        // OutputPass replaces the renderer's implicit tone-mapping + color-space
        // conversion, which only run when rendering straight to screen. In a
        // post-processing chain you MUST end with it or colors come out wrong.
        this.postProcess.outputPass = new OutputPass()
        this.postProcess.composer.addPass(this.postProcess.outputPass)
    }

    resize()
    {
        this.instance.setSize(this.config.width, this.config.height)
        this.instance.setPixelRatio(this.config.pixelRatio)

        this.postProcess.composer.setSize(this.config.width, this.config.height)
        this.postProcess.composer.setPixelRatio(this.config.pixelRatio)
    }

    update()
    {
        if(this.stats)
        {
            this.stats.beforeRender()
        }

        if(this.usePostprocess)
        {
            this.postProcess.composer.render()
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
        this.instance.renderLists.dispose()
        this.instance.dispose()
        this.renderTarget.dispose()
        this.postProcess.composer.renderTarget1.dispose()
        this.postProcess.composer.renderTarget2.dispose()
    }
}
