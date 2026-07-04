import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js'

export default class Resources extends EventEmitter
{
    /**
     * Constructor
     */
    constructor()
    {
        super()

        this.experience = new Experience()
        this.renderer = this.experience.renderer.instance

        this.setLoaders()

        this.toLoad = 0
        this.loaded = 0
        this.items = {}
    }

    /**
     * Set loaders — only the formats the site actually ships: GLBs compressed
     * with EITHER Draco (KHR_draco_mesh_compression, decoded by the
     * self-hosted decoder in public/draco/) or meshopt
     * (EXT_meshopt_compression, decoded by the small WASM module bundled with
     * three), EXR environment maps (DWAB-compressed — far smaller than the
     * old RGBE .hdr), and plain images. The Draco decoder only downloads when
     * a Draco GLB is actually parsed, so meshopt-only pages never pay for it.
     */
    setLoaders()
    {
        this.loaders = []

        // Images
        this.loaders.push({
            extensions: ['jpg', 'png', 'webp'],
            action: (_resource) =>
            {
                const image = new Image()

                image.addEventListener('load', () =>
                {
                    this.fileLoadEnd(_resource, image)
                })

                image.addEventListener('error', () =>
                {
                    this.fileLoadEnd(_resource, image)
                })

                image.src = _resource.source
            }
        })

        // GLTF
        // Draco: SELF-HOSTED decoder (no third-party CDN): public/draco/ holds
        // the decoder files copied from the installed three release
        // (node_modules/three/examples/jsm/libs/draco/gltf/), so versions can
        // never drift apart. In dev, Vite serves public/ at the root
        // (/draco/); in the built bundle the decoder sits beside
        // experience.js, so resolve it from the module URL — that works
        // wherever dist/ is deployed.
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath(
            import.meta.env.DEV ? '/draco/' : new URL('draco/', import.meta.url).href
        )

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)
        gltfLoader.setMeshoptDecoder(MeshoptDecoder)

        this.loaders.push({
            extensions: ['glb', 'gltf'],
            action: (_resource) =>
            {
                gltfLoader.load(_resource.source, (_data) =>
                {
                    this.fileLoadEnd(_resource, _data)
                })
            }
        })

        // EXR (environment map)
        const exrLoader = new EXRLoader()

        this.loaders.push({
            extensions: ['exr'],
            action: (_resource) =>
            {
                exrLoader.load(_resource.source, (_data) =>
                {
                    this.fileLoadEnd(_resource, _data)
                })
            }
        })
    }

    /**
     * Load
     */
    load(_resources = [])
    {
        for(const _resource of _resources)
        {
            this.toLoad++
            const extensionMatch = _resource.source.match(/\.([a-z]+)$/)

            if(typeof extensionMatch[1] !== 'undefined')
            {
                const extension = extensionMatch[1]
                const loader = this.loaders.find((_loader) => _loader.extensions.find((_extension) => _extension === extension))

                if(loader)
                {
                    loader.action(_resource)
                }
                else
                {
                    console.warn(`Cannot found loader for ${_resource}`)
                }
            }
            else
            {
                console.warn(`Cannot found extension of ${_resource}`)
            }
        }
    }

    /**
     * File load end
     */
    fileLoadEnd(_resource, _data)
    {
        this.loaded++
        this.items[_resource.name] = _data

        this.trigger('fileEnd', [_resource, _data])

        if(this.loaded === this.toLoad)
        {
            this.trigger('end')
        }
    }
}
