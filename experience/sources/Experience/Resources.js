import * as THREE from 'three'
import EventEmitter from './Utils/EventEmitter.js'
import Loader from './Utils/Loader.js'

/**
 * Loads asset groups declared in assets.js (or the page's embedded manifest),
 * converts raw image data into textures, and emits progress/end events the
 * World listens to. Unchanged from Bruno's original except the texture
 * colorSpace note below.
 */
export default class Resources extends EventEmitter
{
    constructor(_assets)
    {
        super()

        // Items (will contain every resource keyed by name)
        this.items = {}

        this.loader = new Loader({ renderer: this.renderer })

        this.groups = {}
        this.groups.assets = [..._assets]
        this.groups.loaded = []
        this.groups.current = null
        this.loadNextGroup()

        // File-loaded event
        this.loader.on('fileEnd', (_resource, _data) =>
        {
            let data = _data

            // Convert raw image into a texture
            if(_resource.type === 'texture')
            {
                if(!(data instanceof THREE.Texture))
                {
                    data = new THREE.Texture(_data)
                }
                data.needsUpdate = true

                // r152+: color textures must be tagged SRGBColorSpace here or in
                // the World, or they render washed out. `texture.encoding` no
                // longer exists. Only tag COLOR maps — leave normal/roughness/data
                // maps as the default (NoColorSpace / linear).
                if(_resource.colorSpace === 'srgb')
                {
                    data.colorSpace = THREE.SRGBColorSpace
                }
            }

            this.items[_resource.name] = data

            this.groups.current.loaded++
            this.trigger('progress', [this.groups.current, _resource, data])
        })

        // Group-complete event
        this.loader.on('end', () =>
        {
            this.groups.loaded.push(this.groups.current)

            this.trigger('groupEnd', [this.groups.current])

            if(this.groups.assets.length > 0)
            {
                this.loadNextGroup()
            }
            else
            {
                this.trigger('end')
            }
        })
    }

    loadNextGroup()
    {
        this.groups.current = this.groups.assets.shift()
        this.groups.current.toLoad = this.groups.current.items.length
        this.groups.current.loaded = 0

        // An empty group (e.g. a primitives-only scene whose manifest declares no
        // files yet) still completes. The loader only emits 'end' after at least
        // one file, so emit the same flow here — deferred a microtask so listeners
        // registered after construction (World) still hear it.
        if(this.groups.current.toLoad === 0)
        {
            queueMicrotask(() =>
            {
                this.groups.loaded.push(this.groups.current)
                this.trigger('groupEnd', [this.groups.current])

                if(this.groups.assets.length > 0)
                {
                    this.loadNextGroup()
                }
                else
                {
                    this.trigger('end')
                }
            })
            return
        }

        this.loader.load(this.groups.current.items)
    }

    destroy()
    {
        for(const _itemKey in this.items)
        {
            const item = this.items[_itemKey]
            if(item instanceof THREE.Texture)
            {
                item.dispose()
            }
        }
    }
}
