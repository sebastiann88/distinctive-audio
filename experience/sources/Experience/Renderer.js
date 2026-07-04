import * as THREE from 'three'
import Experience from './Experience.js'

/**
 * WebGL renderer — direct rendering only.
 *
 * Post-processing was removed after the performance audit: the GTAO pass cost
 * a second geometry pass plus two full-screen passes for contact shading that
 * barely read on this pale scene (soft shadows, radial pools and mirror clones
 * already ground every object), and the vignette moved to a zero-cost CSS
 * overlay on the mount (.experience__vignette, opacity driven per-beat by
 * World). Direct rendering keeps native MSAA and inline tone mapping in a
 * single pass — and keeps the composer chain out of the bundle entirely.
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

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('renderer')
        }

        this.setInstance()
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

    resize()
    {
        this.instance.setSize(this.config.width, this.config.height)
        this.instance.setPixelRatio(this.config.pixelRatio)
    }

    update()
    {
        if(this.stats)
        {
            this.stats.beforeRender()
        }

        this.instance.render(this.scene, this.camera.instance)

        if(this.stats)
        {
            this.stats.afterRender()
        }
    }

    destroy()
    {
        this.instance.renderLists.dispose()
        this.instance.dispose()
    }
}
