import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import Experience from './Experience.js'

/**
 * Distinctive Audio — the pale listening gallery.
 *
 * Five vignettes laid out along the +x axis of one long gallery, one per frame
 * beat of the approved beat table (frame-index-01..04, 07). The camera dollies
 * between them driven by sceneState.scrollProgress (written by Motion/GSAP,
 * read here — one render loop).
 *
 * Objects are the production GLBs when the page manifest ships them in
 * resources.items; any vignette whose models are absent falls back to the
 * first-pass primitive geometry (proportioned per each beat's `canvas`
 * column). Nothing here hardcodes a geometry path — the manifest is the seam.
 *
 * Art direction (style-ref TAKE list + register):
 *  - cool pale ground (#f4f7fb family), soft skylight pools, no hard shadows
 *  - matte-black objects defined by silhouette, brass micro-details only
 *  - gold (#f0aa10) is reserved for brass micro-details on the objects —
 *    never ambient, never a wash, and no scripted floor accents (the beat 02
 *    axis line and beat 07 circle both read as unexplained yellow marks).
 */

const VIGNETTE_X = [0, 16, 32, 48, 64]

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.sceneConfig = this.experience.sceneConfig

        this.colors = Object.assign({
            ground: '#f4f7fb',
            surface: '#f8f9ff',
            teal: '#003d5e',
            tealDeep: '#005581',
            ink: '#0b1c30',
            accent: '#f0aa10'
        }, this.sceneConfig.colors)

        // Beat ranges come from the manifest (sceneConfig.beats); these defaults
        // mirror the approved CSV proportions (95/145/95/90/90 of 515vh).
        this.beats = this.sceneConfig.beats ?? [
            { id: 'frame-index-01', from: 0.000, to: 0.184 },
            { id: 'frame-index-02', from: 0.184, to: 0.466 },
            { id: 'frame-index-03', from: 0.466, to: 0.650 },
            { id: 'frame-index-04', from: 0.650, to: 0.825 },
            { id: 'frame-index-07', from: 0.825, to: 1.000 }
        ]

        // Per-beat camera keys: a = arrival framing, s = settled framing.
        // Within a beat: travel a→s until `settle`, hold, then depart toward the
        // next beat's arrival after `depart`. Copy is read in the held portion
        // (the CSV's "body text is never read during a camera move" rule);
        // beat 02's long travel window IS the beat (the signature dolly).
        this.beatCams = [
            // 01: speaker RIGHT of frame, large (the copy card sits left in the
            // DOM) — target is offset left of the speaker so it holds the right.
            { a: { pos: [-0.35, 1.20, 7.4], tgt: [0.64, 1.02, 0] }, s: { pos: [0.5, 1.08, 5.8], tgt: [0.75, 0.92, 0] },    settle: 0.30, depart: 0.62 },
            // 02: low sources trio — camera drops and closes in; settles earlier
            // (0.55) since the section's scroll span was shortened.
            { a: { pos: [14.3, 1.10, 7.0], tgt: [15.4, 0.78, 0] },  s: { pos: [16.0, 1.00, 5.6], tgt: [16.0, 0.62, 0] },   settle: 0.55, depart: 0.88 },
            // 03: three plinths — target recentred on the tighter diagonal.
            { a: { pos: [29.2, 1.35, 8.6], tgt: [31.6, 0.75, -0.3] }, s: { pos: [30.4, 1.25, 7.6], tgt: [31.9, 0.70, -0.4] }, settle: 0.30, depart: 0.82 },
            // 04: depart 1.0 — the camera holds settled through the whole pin
            // (copy fade included); the departure dolly begins exactly as the
            // section unpins and rides the address band's 100vh rise, so the
            // canvas sliver above the band keeps moving the entire way.
            { a: { pos: [48.0, 1.05, 7.8], tgt: [48.0, 0.90, 0] },  s: { pos: [48.0, 1.05, 7.5], tgt: [48.0, 0.88, 0] },   settle: 0.25, depart: 1.0 },
            // 07: the ARRIVAL waits well left of the listening room (empty
            // gallery in frame — the speakers must NOT loom in the canvas
            // slivers behind the address/services bands, even on wide
            // viewports where the horizontal FOV grows), then a long lateral
            // dolly brings the stereo pair gliding in from the right, settling
            // tight on it. The chair reads small at the bottom. settle 0.35
            // (pin-relative) compensates for the shortened section + uncapped
            // scrub extension, keeping the lateral glide at its authored pace
            // instead of whipping in.
            { a: { pos: [55.0, 1.15, 7.8], tgt: [55.8, 0.95, -0.4] }, s: { pos: [64.0, 1.08, 6.2], tgt: [64.0, 0.85, -0.5] }, settle: 0.35, depart: 1.01 }
        ]

        this.disposables = { geometries: [], materials: [], textures: [] }
        this.trackedModels = new Set()
        // SSR bookkeeping: the mirrored-clone fallback reflections (hidden
        // while the renderer's SSR pass is active) and the transparent
        // floor-plane overlays that must join the SSR selection (see
        // setReflections).
        this.mirrorClones = []
        this.floorOverlays = []
        this.camPos = new THREE.Vector3()
        this.camTgt = new THREE.Vector3()
        this.tmp = new THREE.Vector3()

        // Two-stage load (perf pass): the 'base' group carries ONLY what the
        // opening frame needs (hero floorstander + environment) so the page
        // can reveal on ~900 KB instead of the full catalogue; the 'extras'
        // group streams the remaining rooms' models in behind the reveal.
        // Manifests without an 'extras' group build everything at once.
        this.hasExtras = (this.experience.assets ?? []).some((g) => g.name === 'extras')

        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.build()
            }
            else if(_group.name === 'environment')
            {
                this.swapEnvironment()
            }
            else if(_group.name === 'extras' && this.built)
            {
                this.buildLaterVignettes()
            }
        })
    }

    // ── helpers ──────────────────────────────────────────────────────────

    geo(geometry)
    {
        this.disposables.geometries.push(geometry)
        return geometry
    }

    mat(material)
    {
        this.disposables.materials.push(material)
        return material
    }

    box(w, h, d, material, x, y, z, group)
    {
        const mesh = new THREE.Mesh(this.geo(new THREE.BoxGeometry(w, h, d)), material)
        mesh.position.set(x, y, z)
        mesh.castShadow = true
        mesh.receiveShadow = true
        ;(group ?? this.scene).add(mesh)
        return mesh
    }

    cylinder(rTop, rBottom, h, material, x, y, z, group)
    {
        const mesh = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(rTop, rBottom, h, 24)), material)
        mesh.position.set(x, y, z)
        mesh.castShadow = true
        mesh.receiveShadow = true
        ;(group ?? this.scene).add(mesh)
        return mesh
    }

    brassFeet(x, z, w, d, group)
    {
        const y = 0.03
        const dx = w / 2 - 0.03
        const dz = d / 2 - 0.03
        for(const [ox, oz] of [[-dx, -dz], [dx, -dz], [-dx, dz], [dx, dz]])
        {
            this.cylinder(0.022, 0.03, 0.06, this.brass, x + ox, y, z + oz, group)
        }
    }

    /** Primitive gallery chair, shared by beats 04 and 07: graphite shell
     *  (chairShell) with fabric pads on seat and back, a slightly reclined
     *  backrest, and brass foot caps — the same micro-detail language as the
     *  components' feet. Proportions come in per beat. */
    primitiveChair(x, z, rotY, { seatW, seatD, seatH, backH, legT })
    {
        const chair = new THREE.Group()
        chair.position.set(x, 0, z)
        chair.rotation.y = rotY
        this.scene.add(chair)

        // Seat shell + fabric pad.
        this.box(seatW, 0.045, seatD, this.chairShell, 0, seatH, 0, chair)
        this.box(seatW - 0.05, 0.035, seatD - 0.05, this.chairPad, 0, seatH + 0.04, 0, chair)

        // Backrest reclined a few degrees, fabric pad on its seat-facing side.
        const backY = seatH + backH / 2 + 0.03
        const backZ = -seatD / 2 + 0.025
        const back = this.box(seatW, backH, 0.045, this.chairShell, 0, backY, backZ, chair)
        back.rotation.x = -0.09
        const pad = this.box(seatW - 0.06, backH - 0.08, 0.02, this.chairPad, 0, backY, backZ + 0.033, chair)
        pad.rotation.x = -0.09

        // Legs + brass foot caps.
        const dx = seatW / 2 - legT / 2 - 0.015
        const dz = seatD / 2 - legT / 2 - 0.015
        for(const [ox, oz] of [[-dx, -dz], [dx, -dz], [-dx, dz], [dx, dz]])
        {
            this.box(legT, seatH - 0.03, legT, this.chairShell, ox, (seatH - 0.03) / 2 + 0.03, oz, chair)
            this.cylinder(legT * 0.44, legT * 0.55, 0.03, this.brass, ox, 0.015, oz, chair)
        }
        return chair
    }

    /** Blurred, quiet floor reflection: a mirrored clone, ~6% strength. */
    reflect(mesh)
    {
        const clone = new THREE.Mesh(mesh.geometry, this.reflection)
        clone.position.copy(mesh.position)
        clone.position.y = -mesh.position.y
        clone.scale.set(1, -1, 1)
        clone.castShadow = false
        clone.receiveShadow = false
        this.scene.add(clone)
        this.mirrorClones.push(clone)
        return clone
    }

    /**
     * Seat a manifest-loaded GLB in the gallery, or return null so the caller
     * falls back to its primitive stand-in. The exports arrive NORMALIZED
     * (~1-unit max dimension, center pivot), so authored scale is never
     * trusted: measure the raw box, scale uniformly so the dominant `axis`
     * matches the real-world `size`, then lift by -min.y so the model sits on
     * the local floor `y` (0 for the gallery, plinth/table top otherwise).
     *
     * Returns a fresh clone each call — one loaded GLB feeds many placements
     * (the floorstander appears in four beats). Clones share geometry,
     * material, and texture, so those are registered for disposal exactly
     * once per model name.
     *
     * `rig` (ported from the WebGI product viewer): the exports carry an
     * authored studio light rig (KHR_lights_punctual — key/rim spots aimed at
     * the product plus two fills), which the webgi.js island honors and which
     * is what makes the models pop there. Pass an array of light-node names
     * (e.g. ['Key_Light', 'Rim_Light']) to KEEP those lights on this
     * placement — shadowless, distance-capped, scaled by `rigIntensity` — so
     * the model gets its authored specular/rim definition without the full
     * rig-per-clone explosion that got them stripped in the first place.
     */
    placeModel(name, { axis, size, x, y = 0, z, rotY = 0, rig = null, rigIntensity = 1 })
    {
        const source = this.resources.items[name]?.scene
        if(!source)
            return null

        if(!this.trackedModels.has(name))
        {
            this.trackedModels.add(name)
            source.traverse((child) =>
            {
                if(child.isMesh)
                {
                    this.disposables.geometries.push(child.geometry)
                    for(const material of Array.isArray(child.material) ? child.material : [child.material])
                    {
                        this.disposables.materials.push(material)
                        if(material.map)
                            this.disposables.textures.push(material.map)
                    }
                }
            })

            if(name === 'floorstanding-loudspeaker')
                this.brightenFloorstander(source)

            if(name === 'integrated-amplifier')
                this.repairAmplifier(source)
        }

        const model = source.clone()

        // Strip any lights the export shipped (KHR_lights_punctual): the
        // speaker and turntable GLBs each embed a 4-light studio rig, and
        // cloned placements multiplied those into dozens of live punctual
        // lights — in a forward renderer every one adds per-fragment cost to
        // EVERY material in the frame. The gallery has its own light rig.
        // Exception: lights this placement asked to keep via `rig`.
        const strays = []
        model.traverse((child) => { if(child.isLight) strays.push(child) })
        for(const light of strays)
        {
            if(rig?.includes(light.name))
            {
                light.castShadow = false
                light.intensity *= rigIntensity
                // Physical decay-2 falloff never reaches zero — cap the range
                // so a kept rig light can't spill into the next room over.
                light.distance = 8
                // Object3D.clone() breaks a SpotLight's aim: the clone gets a
                // fresh unparented `target` (matrixWorld = identity), so the
                // spot silently re-aims at the world origin. Re-do what
                // GLTFLoader did on load — target as a child at local -z —
                // and the authored aim survives the placement transform.
                if(light.isSpotLight)
                {
                    light.target.position.set(0, 0, -1)
                    light.add(light.target)
                }
                continue
            }
            light.removeFromParent()
        }

        const box = new THREE.Box3().setFromObject(model)
        const dims = box.getSize(new THREE.Vector3())
        const scale = size / dims[axis]
        model.scale.setScalar(scale)
        model.position.set(x, y - box.min.y * scale, z)
        model.rotation.y = rotY

        model.traverse((child) =>
        {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        this.scene.add(model)
        return model
    }

    /** One-time exposure lift for the floorstander GLB — shared by every
     *  clone (the beat-01 hero and the beat-07 pair), so it runs once when
     *  the model is first tracked. NOT a re-skin: the export's own palette
     *  (charcoal panel, black frame, orange cabinet) stays exactly as
     *  authored — owner call. The model just catches more light: a stronger
     *  environment response, and a faint SELF-COLOURED emissive lift (each
     *  material brightens in its own hue, so the charcoal stays charcoal
     *  instead of washing to grey and the orange keeps its saturation) that
     *  keeps the shadowed faces readable in beat 07's dimmed grade. */
    brightenFloorstander(source)
    {
        source.traverse((child) =>
        {
            if(!child.isMesh)
                return
            for(const m of Array.isArray(child.material) ? child.material : [child.material])
            {
                m.envMapIntensity = 3.4

                // Emissive in the material's own hue, NORMALISED to a fixed
                // peak before the intensity scale — a raw color.clone() on the
                // near-black charcoal multiplies to nothing, so dark materials
                // (the ones that need the lift) would get none.
                const lift = m.color.clone()
                const peak = Math.max(lift.r, lift.g, lift.b, 0.001)
                lift.multiplyScalar(Math.min(0.55 / peak, 12))
                m.emissive = lift
                m.emissiveIntensity = 0.22
            }
        })
    }

    /** One-time repair for the integrated-amplifier GLB — shared by every
     *  clone (beats 02 and 03), so it runs once when the model is first
     *  tracked. The export's vertex normals are broken on the flat chassis
     *  panels (the lid is triangulated as a corner fan and shipped smoothed
     *  normals), and its chassis material omits metallicFactor — glTF's
     *  default is FULLY metallic — so every normal error becomes a dark
     *  specular streak raking across the top plate. Recompute the normals
     *  (hard edges survive: the export already splits vertices along them)
     *  and drop the chassis normal map, which was baked against the broken
     *  normals (the wood side caps keep theirs — the grain is real detail). */
    repairAmplifier(source)
    {
        source.traverse((child) =>
        {
            if(!child.isMesh)
                return
            child.geometry.computeVertexNormals()
            for(const m of Array.isArray(child.material) ? child.material : [child.material])
            {
                if(m.name === 'Front Panel' && m.normalMap)
                {
                    m.normalMap = null
                    m.needsUpdate = true
                }
            }
        })
    }

    /** Register a soft elliptical contact shadow in the floor shader under an
     *  object: world x/z centre, radius, strength (0..1). Analytic AO, not a
     *  shadow-map term — it stays perfectly soft and stable at any distance
     *  and costs one smoothstep per floor fragment. */
    contactShadow(x, z, radius, strength)
    {
        const slots = this.contactShadowUniform.value
        if(this.contactShadowCount >= slots.length)
            return
        slots[this.contactShadowCount++].set(x, z, radius, strength)
    }

    /** reflect(), for a placed model group: mirrored clone in the shared
     *  reflection material. */
    reflectModel(model)
    {
        const clone = model.clone()
        const strays = []
        clone.traverse((child) =>
        {
            if(child.isMesh)
            {
                child.material = this.reflection
                child.castShadow = false
                child.receiveShadow = false
            }
            // Any rig light the placement kept must not double up in its
            // mirrored clone.
            if(child.isLight)
                strays.push(child)
        })
        for(const light of strays)
            light.removeFromParent()
        clone.scale.y *= -1
        clone.position.y *= -1
        this.scene.add(clone)
        this.mirrorClones.push(clone)
        return clone
    }

    /** Punch a hole in the SSR floor reflection under one object: a
     *  floor-level plane kept OUT of the SSR selection. Invisible in the
     *  beauty pass (no color/depth writes), but the metalness mask renders
     *  every non-selected mesh opaque black, so the SSR pass skips exactly
     *  these floor pixels. Sits above the skylight-pool overlays (y 0.006,
     *  which ARE selected) so it wins the mask where they overlap. */
    maskReflection(x, z, w, d)
    {
        const mask = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(w, d)),
            this.mat(new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }))
        )
        mask.rotation.x = -Math.PI / 2
        mask.position.set(x, 0.009, z)
        this.scene.add(mask)
        return mask
    }

    /** Radial white glow texture (bright core, feathered to transparent) —
     *  the skylight pools and any soft light catch. Built once, shared. */
    radialGlowTexture()
    {
        if(this._radialGlow)
            return this._radialGlow

        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = 256
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
        gradient.addColorStop(0, 'rgba(255,255,255,0.9)')
        gradient.addColorStop(0.4, 'rgba(255,255,255,0.45)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 256, 256)

        this._radialGlow = new THREE.CanvasTexture(canvas)
        this._radialGlow.colorSpace = THREE.SRGBColorSpace
        this.disposables.textures.push(this._radialGlow)
        return this._radialGlow
    }

    /** Soft circular skylight pool on the floor under a vignette — a radial
     *  gradient (not a flat disc), so it reads as the oculus light landing. */
    skylightPool(x, radius)
    {
        const mesh = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(radius * 2, radius * 2)),
            this.mat(new THREE.MeshBasicMaterial({
                map: this.radialGlowTexture(),
                transparent: true,
                opacity: 0.5,
                depthWrite: false
            }))
        )
        mesh.rotation.x = -Math.PI / 2
        mesh.position.set(x, 0.006, 0.4)
        this.scene.add(mesh)
        this.floorOverlays.push(mesh)
    }

    // ── build ────────────────────────────────────────────────────────────

    build()
    {
        this.setEnvironment()
        this.setMaterials()
        this.setGallery()
        this.setLights()
        this.setVignette01()

        // With an 'extras' group in flight, rooms 02–07 arrive right behind
        // the reveal (buildLaterVignettes); the gallery, pools and washes
        // already exist, so a racing scroller sees an empty room for a
        // moment, never a broken one.
        if(!this.hasExtras)
            this.buildLaterVignettes()

        this.freezeMatrices()
        this.setReflections()

        this.built = true
        // First frame of the built scene must render even if the user has not
        // scrolled (render-on-demand skips unchanged frames), and the throttled
        // shadow map needs its first bake.
        this.experience.needsRender = true
        this.experience.renderer.instance.shadowMap.needsUpdate = true
    }

    /** Rooms 02–07, deferred behind the reveal when the manifest ships an
     *  'extras' group. Re-freezes and re-syncs the reflections because the
     *  new meshes (and their mirror clones) arrive after build(). */
    buildLaterVignettes()
    {
        this.setVignette02()
        this.setVignette03()
        this.setVignette04()
        this.setVignette07()

        if(this.built)
        {
            this.freezeMatrices()
            this.setReflections()
            this.experience.needsRender = true
            this.experience.renderer.instance.shadowMap.needsUpdate = true
        }
    }

    /** Freeze static transforms: every mesh in the gallery is stationary
     *  (only the camera rig and the key/fill lights move), so skip the
     *  per-frame local-matrix recomposition for the whole mesh population.
     *  Matrices are all that's skipped — material animation is unaffected.
     *  Safe to run repeatedly (deferred vignettes re-freeze). */
    freezeMatrices()
    {
        this.scene.traverse((child) =>
        {
            if(child.isMesh)
            {
                child.updateMatrix()
                child.matrixAutoUpdate = false
            }
        })
    }

    /** Hand the reflective surfaces to the renderer's SSR pass. The floor is
     *  the reflector; the transparent floor-plane overlays (skylight pools)
     *  join the selection because SSRPass's metalness mask renders every
     *  non-selected mesh as opaque black — left out, they would punch holes
     *  in the reflection exactly under each vignette. Their depth and
     *  normals match the floor, so the reflection continues under them. */
    setReflections()
    {
        const renderer = this.experience.renderer

        // Only the #debug build has an SSR pass to feed; in production it does
        // not exist. Either way the mirror-clone fallback must be synced so the
        // floor reflection is visible (it is the only reflector when SSR is off,
        // which is the default).
        if(renderer.ssrPass)
            renderer.setSSRSelects([this.floor, ...this.floorOverlays])

        this.syncMirrorReflections()
    }

    /** The mirrored-clone fallback reflections track the SSR state: hidden
     *  while the SSR pass is doing the reflecting, restored when it is
     *  toggled off (Firefox probe, adaptive quality, debug GUI). */
    syncMirrorReflections()
    {
        const renderer = this.experience.renderer
        const ssrActive = !!(renderer.ssrPass && renderer.useSSR)
        for(const clone of this.mirrorClones)
            clone.visible = !ssrActive
        this.experience.needsRender = true
    }

    setEnvironment()
    {
        // The environment map ships in its own fast-follow group (name:
        // 'environment' — assets/exr/atmosphere.exr, DWAB; the loader handles
        // EXR and RGBE .hdr alike), loaded right behind the reveal-gating
        // base group. Build starts on the neutral procedural RoomEnvironment
        // so the opening frame never waits for the file; swapEnvironment()
        // upgrades to the real image-based lighting when it lands — the
        // matte-black GLBs' specular gradients and the brass's warm
        // reflections. If the manifest shipped it inside 'base' instead
        // (older pages), it is applied here directly.
        const envTexture = this.resources.items['environment']
        if(envTexture)
        {
            this.applyEnvironment(envTexture, this.sceneConfig.environmentIntensity ?? 0.45)
        }
        else
        {
            const pmrem = new THREE.PMREMGenerator(this.experience.renderer.instance)
            this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
            pmrem.dispose()
            this.disposables.textures.push(this.envMap)
            this.scene.environment = this.envMap
            this.scene.environmentIntensity = this.sceneConfig.environmentIntensity ?? 0.25
            this.envBase = this.scene.environmentIntensity
        }

        // Fog pulled in so floor and wall converge to the same tone where they
        // meet (~12+ units out) — part of erasing the hard horizon line.
        // Its pale colour is UNLIT — at beat 07's camera distance the back wall
        // is majority fog, which is why the light-rig trims alone can't darken
        // that frame. The per-beat `fog` trim grades this colour (updateLightTrims).
        this.scene.fog = new THREE.Fog(this.colors.ground, 11, 30)
        this.fogBase = new THREE.Color(this.colors.ground)
        this.fogTarget = new THREE.Color()
    }

    /** PMREM a loaded equirect texture into scene.environment. */
    applyEnvironment(envTexture, intensity)
    {
        const pmrem = new THREE.PMREMGenerator(this.experience.renderer.instance)
        this.envMap = pmrem.fromEquirectangular(envTexture).texture
        pmrem.dispose()
        envTexture.dispose()

        this.disposables.textures.push(this.envMap)
        this.scene.environment = this.envMap
        this.scene.environmentIntensity = intensity
        this.envBase = intensity
    }

    /** The fast-follow environment landed (typically well inside the intro
     *  ramp). Swap the procedural placeholder for the real map with the
     *  intensity pulled LOW — updateLightTrims' per-frame easing then lifts
     *  it to target over ~1 s, so the richer lighting breathes in instead
     *  of popping. */
    swapEnvironment()
    {
        const envTexture = this.resources.items['environment']
        if(!envTexture || !this.built)
            return

        const placeholder = this.envMap
        this.applyEnvironment(envTexture, this.sceneConfig.environmentIntensity ?? 0.45)
        this.scene.environmentIntensity = 0.12
        placeholder?.dispose()

        this.experience.needsRender = true
    }

    setMaterials()
    {
        // Matte black: absorbs light, thin specular edge along corners.
        this.matteBlack = this.mat(new THREE.MeshStandardMaterial({
            color: '#17191d', roughness: 0.48, metalness: 0.15
        }))
        // Slightly darker face material for drivers / fascia detail.
        this.blackDetail = this.mat(new THREE.MeshStandardMaterial({
            color: '#0d0e11', roughness: 0.6, metalness: 0.1
        }))
        // Brass micro-details only (feet, knobs, weights) — the edge catches.
        this.brass = this.mat(new THREE.MeshStandardMaterial({
            color: '#b98f47', roughness: 0.3, metalness: 0.95
        }))
        // Pale plinths / table: lacquered museum finish. Clearcoat picks up the
        // HDR environment so every face shades with the same skylight response
        // (the flat Lambert-ish boxes previously read inconsistently lit), and
        // an injected vertical gradient grounds each box — darker toward the
        // floor, lifting toward the lit top edge.
        this.plinth = this.mat(new THREE.MeshPhysicalMaterial({
            color: '#e8edf4', roughness: 0.32, metalness: 0,
            clearcoat: 0.6, clearcoatRoughness: 0.22
        }))
        this.plinth.onBeforeCompile = (shader) =>
        {
            shader.vertexShader = shader.vertexShader
                .replace('#include <common>', '#include <common>\nvarying float vPlinthY;')
                .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPlinthY = (modelMatrix * vec4(transformed, 1.0)).y;')
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', '#include <common>\nvarying float vPlinthY;')
                .replace('#include <color_fragment>', '#include <color_fragment>\n{\n\tfloat plinthH = smoothstep(0.0, 0.55, vPlinthY);\n\tdiffuseColor.rgb *= mix(0.82, 1.06, plinthH);\n}')
        }
        // White cotton gloves.
        this.glove = this.mat(new THREE.MeshStandardMaterial({
            color: '#f5f2ea', roughness: 0.95, metalness: 0
        }))
        // Chair frame: lifted warm graphite, a deliberate step up from the
        // matte-black electronics — the chair is furniture, not gear, and at
        // #17191d it read as a flat black cutout (no face-to-face shading).
        // Clearcoat gives it the plinths' skylight response, so seat, back,
        // and legs each catch the oculus differently and the form reads.
        this.chairShell = this.mat(new THREE.MeshPhysicalMaterial({
            color: '#4d545f', roughness: 0.38, metalness: 0.05,
            clearcoat: 0.55, clearcoatRoughness: 0.28
        }))
        // Woven seat/back pads: lighter and fully matte, with sheen so the
        // light catch reads as fabric rather than plastic.
        this.chairPad = this.mat(new THREE.MeshPhysicalMaterial({
            color: '#6b7280', roughness: 0.9, metalness: 0,
            sheen: 0.5, sheenColor: new THREE.Color('#aeb6c2'), sheenRoughness: 0.6
        }))
        // Shared reflection material (mirrored clones). DoubleSide because the
        // y-flip reverses triangle winding, which would cull front-side faces.
        // Opacity raised with the glossier floor — the reference's polished
        // gallery shows a clearly readable (still soft) reflection.
        this.reflection = this.mat(new THREE.MeshBasicMaterial({
            color: '#3a4250', transparent: true, opacity: 0.16, depthWrite: false,
            side: THREE.DoubleSide
        }))
    }

    setGallery()
    {
        // POLISHED concrete floor, a clear step DARKER than the wall so the
        // ground plane reads as its own material and the pale wall lifts off
        // it (the old floor sat too close to the wall tone and the hero frame
        // read flat). Two more grades happen in the SHADER (injections below):
        //  1. Skylight pool grade — per 16-unit room the floor brightens
        //     toward the oculus centre and falls away toward the corners,
        //     mirroring the wall's oculus falloff so floor and wall shade as
        //     one lighting scheme (floor one step down).
        //  2. Soft contact shadows — analytic elliptical AO blobs under each
        //     vignette's objects (registered via contactShadow()), softer and
        //     more stable than the shadow map alone; they ground the hero
        //     speaker, whose floor reflection is deliberately removed.
        const floorMat = this.mat(new THREE.MeshStandardMaterial({
            color: '#d7dfeb', roughness: 0.56, metalness: 0,
            envMapIntensity: 0.22
        }))

        // Fixed-size uniform block; the vignette builders fill it via
        // contactShadow() (build order: setGallery runs first). Unused slots
        // keep radius 0 and are skipped in the shader.
        this.contactShadowUniform = { value: Array.from({ length: 16 }, () => new THREE.Vector4()) }
        this.contactShadowCount = 0

        floorMat.onBeforeCompile = (shader) =>
        {
            shader.uniforms.uContactShadows = this.contactShadowUniform
            shader.vertexShader = shader.vertexShader
                .replace('#include <common>', '#include <common>\nvarying vec2 vFloorXZ;')
                .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFloorXZ = (modelMatrix * vec4(transformed, 1.0)).xz;')
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', '#include <common>\nvarying vec2 vFloorXZ;\nuniform vec4 uContactShadows[16];')
                .replace('#include <color_fragment>', `#include <color_fragment>
{
	// Skylight pool grade — same room math as the wall's oculus falloff.
	float roomDx = abs(mod(vFloorXZ.x + 8.0, 16.0) - 8.0);
	float poolR = length(vec2(roomDx, (vFloorXZ.y - 0.4) * 0.9));
	diffuseColor.rgb *= mix(1.05, 0.84, smoothstep(2.4, 9.5, poolR));

	// Soft contact shadows: xy = world xz, z = radius, w = strength.
	float shade = 1.0;
	for(int i = 0; i < 16; i++)
	{
		vec4 s = uContactShadows[i];
		if(s.z <= 0.0) continue;
		float d = length(vFloorXZ - s.xy) / s.z;
		shade *= 1.0 - s.w * (1.0 - smoothstep(0.25, 1.0, d));
	}
	diffuseColor.rgb *= shade;
}`)
        }

        const floor = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 32)),
            floorMat
        )
        floor.rotation.x = -Math.PI / 2
        floor.position.set(32, 0, 2)
        floor.receiveShadow = true
        this.scene.add(floor)
        this.floor = floor

        // Back wall, shaped in the SHADER (two injections):
        //  1. Cove blend — the base fades into the floor color over ~2 units,
        //     so the floor/wall junction reads as a soft cove, not a seam.
        //  2. Oculus falloff — per 16-unit room, albedo falls away radially
        //     from the skylight centre (x = room centre, y ≈ 3.2). This bakes
        //     the reference's bright-centre / receding-corner grade into the
        //     wall itself, so it survives any light-rig trim (unlike the unlit
        //     glow planes, which the trims can't darken).
        const wallMat = this.mat(new THREE.MeshStandardMaterial({
            color: '#f4f7fb', roughness: 1
        }))
        // Matches the DARKER floor at the wall line (base #d7dfeb, shaded
        // below 1.0 that far from the pool centre) so the cove stays a soft
        // blend, not a visible tone step.
        const floorTone = new THREE.Color('#d3dbe8')
        wallMat.onBeforeCompile = (shader) =>
        {
            shader.uniforms.uCoveColor = { value: floorTone }
            shader.vertexShader = shader.vertexShader
                .replace('#include <common>', '#include <common>\nvarying vec2 vWallXY;')
                .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWallXY = (modelMatrix * vec4(transformed, 1.0)).xy;')
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', '#include <common>\nvarying vec2 vWallXY;\nuniform vec3 uCoveColor;')
                .replace('#include <color_fragment>', `#include <color_fragment>
{
	vec3 wallCol = mix(uCoveColor, diffuseColor.rgb, smoothstep(0.0, 2.2, vWallXY.y));
	float roomDx = abs(mod(vWallXY.x + 8.0, 16.0) - 8.0);
	float oculusR = length(vec2(roomDx, (vWallXY.y - 3.2) * 0.85));
	wallCol *= mix(1.05, 0.78, smoothstep(1.8, 7.5, oculusR));
	diffuseColor.rgb = wallCol;
}`)
        }
        const wall = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 12)),
            wallMat
        )

        // Oculus wall-wash: a soft radial glow high on the wall over every
        // vignette — the visible bloom of the skylight the camera can never
        // look up at. Brightens the upper wall exactly where the section
        // headings sit; strongest in the final listening room (the reference
        // image's top-of-frame glow).
        for(const x of VIGNETTE_X)
        {
            const wash = new THREE.Mesh(
                this.geo(new THREE.PlaneGeometry(8.5, 4)),
                this.mat(new THREE.MeshBasicMaterial({
                    map: this.radialGlowTexture(),
                    transparent: true,
                    // Final room eased 0.4 → 0.3: still the strongest wash in
                    // the gallery, just no longer fighting beat 07's dimmed
                    // grade (the closing frame's brightness is governed by the
                    // fog/clear-colour grade — see updateLightTrims).
                    opacity: x === VIGNETTE_X[4] ? 0.3 : 0.28,
                    depthWrite: false
                }))
            )
            wash.position.set(x, 3.1, -4.42)
            this.scene.add(wash)
        }
        wall.position.set(32, 6, -4.5)
        wall.receiveShadow = true
        this.scene.add(wall)

        // (The old protruding "wall seam" pillars between vignettes are gone —
        // under the brighter fill + AO they read as distracting vertical lines
        // and broke the cove glow at their base.)

        // Cove light at the wall base: ONE soft gradient bloom anchored at the
        // floor line, fading upward — no bright core bar (a solid strip read
        // as plastic baseboard trim, not emitted light). Unlit so it reads as
        // glow, opacity kept low enough to melt into the wall.
        const coveCanvas = document.createElement('canvas')
        coveCanvas.width = 1
        coveCanvas.height = 128
        const coveCtx = coveCanvas.getContext('2d')
        const coveGradient = coveCtx.createLinearGradient(0, 128, 0, 0)
        coveGradient.addColorStop(0, 'rgba(255,255,255,0.6)')
        coveGradient.addColorStop(0.35, 'rgba(255,255,255,0.22)')
        coveGradient.addColorStop(1, 'rgba(255,255,255,0)')
        coveCtx.fillStyle = coveGradient
        coveCtx.fillRect(0, 0, 1, 128)
        const coveTexture = new THREE.CanvasTexture(coveCanvas)
        coveTexture.colorSpace = THREE.SRGBColorSpace
        this.disposables.textures.push(coveTexture)

        const coveGlow = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 1.1)),
            this.mat(new THREE.MeshBasicMaterial({
                map: coveTexture, transparent: true, opacity: 0.4, depthWrite: false
            }))
        )
        // Bottom edge exactly at the floor line so there is no visible seam
        // where the bloom starts.
        coveGlow.position.set(32, 0.55, -4.45)
        this.scene.add(coveGlow)

        // Skylight pools, one per vignette.
        for(const x of VIGNETTE_X)
        {
            this.skylightPool(x, 2.6)
        }
    }

    setLights()
    {
        // Cool hemispheric ambient — broad, low-contrast fill, kept modest so
        // the key light's soft shadows survive on the pale floor.
        this.hemiBase = 0.65
        this.hemi = new THREE.HemisphereLight('#f4f7fb', '#c5d1e0', this.hemiBase)
        this.scene.add(this.hemi)

        // Shadowless front fill aimed at the back wall: the overhead key only
        // grazes vertical surfaces, which left the wall grey and the matte-black
        // objects reading as flat silhouettes. Tracks the vignette with the key.
        this.fillBase = 0.95
        this.fill = new THREE.DirectionalLight('#f4f7fb', this.fillBase)
        this.fill.position.set(0, 4, 12)
        this.fill.target.position.set(0, 3.2, -4.5)
        this.scene.add(this.fill)
        this.scene.add(this.fill.target)

        // Per-beat exposure trims, eased in update(). Most beats run the rig
        // as-is; beat 07 goes for the reference atmosphere — the oculus pool
        // stays at full strength while the ambient terms (fill hits the wall
        // head-on there, env, hemi) drop and the vignette deepens, so the
        // stereo pair sits in a bright pool with cool falling-away corners.
        // Beat 07 is `late`: its grade does NOT lead the depart dolly (the
        // canvas slivers behind the address/services bands stay at the bright
        // gallery grade) — instead it eases in with the arrival travel,
        // landing as the stereo pair settles into frame (see updateLightTrims).
        // Beat 03 takes a mild trim of the same shape: its pale plinths plus
        // the head-on fill pushed the whole room toward clipping, so the
        // ambient terms step back while the key pool keeps the plinth tops lit.
        // `fog` grades the (unlit) fog colour — the term that actually darkens
        // the far wall, which sits mostly inside the fog at these camera
        // distances and shrugs off the light trims alone.
        this.lightTrims = [
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1, fog: 1 },
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1, fog: 1 },
            { key: 0.95, fill: 0.72, env: 0.78, hemi: 0.82, vig: 1.2, fog: 1 },
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1, fog: 1 },
            // (Grade eased up one step — owner call: the closing room ran too
            // dark; this keeps the dimmed-atmosphere shape, just lifted.)
            { key: 1, fill: 0.62, env: 0.68, hemi: 0.8, vig: 1.4, fog: 0.99, late: true }
        ]

        // Per-beat key-light offset: beat 01's key hangs slanted from upper
        // right — the hero speaker's PCF shadow elongates left toward the
        // open floor and the speaker models with a bright +x edge. Other
        // beats keep the straight-overhead oculus. Eased in updateCamera.
        this.keyOffsets = [
            { x: 2.6, z: 1.2 },
            { x: 0, z: 0 },
            { x: 0, z: 0 },
            { x: 0, z: 0 },
            { x: 0, z: 0 }
        ]

        // One dominant overhead OCULUS: a wide, fully-feathered spotlight
        // (penumbra 1) instead of a uniform directional, so each vignette sits
        // in a soft circular pool of light that falls away toward the corners —
        // the reference image's skylight look. decay 0 keeps the level
        // comparable to the old directional key. It follows the active
        // vignette so one shadow camera stays tight across the gallery.
        this.keyBase = 2.1
        this.key = new THREE.SpotLight('#fff8ee', this.keyBase, 0, 0.36, 1.0, 0)
        this.key.position.set(0, 9, 2.5)
        this.key.target.position.set(0, 0, 0)
        this.key.castShadow = true
        // 1024px shadows (performance audit: at this PCF softness the 2048 map
        // was indistinguishable); normalBias (over a large depth bias) avoids
        // acne without detaching small parts' shadows from their objects.
        this.key.shadow.mapSize.set(1024, 1024)
        // radius 5: soft skylight shadows that still READ — at 8 the cast
        // shadows blurred to nothing and objects floated on their analytic
        // contact blobs alone.
        this.key.shadow.radius = 5
        this.key.shadow.bias = -0.0002
        this.key.shadow.normalBias = 0.03
        this.key.shadow.camera.near = 0.5
        this.key.shadow.camera.far = 20
        this.scene.add(this.key)
        this.scene.add(this.key.target)
    }

    /** beat 01 — single floorstander, large and impressive in the RIGHT of
     *  frame (the hero copy holds the left half), angled slightly to camera.
     *  This speaker carries NO floor reflection (owner call): the SSR patch
     *  where its mirror image would land is masked out, and no mirrored
     *  fallback clone is made. The beat-07 pair keeps its reflections. */
    setVignette01()
    {
        const x = VIGNETTE_X[0] + 1.6

        // Mask sized to the reflection footprint: from the speaker base out
        // toward the beat-01 camera (z ≈ 5.8–7.4, eye ≈ 1.1) — a 1.9-tall
        // object's mirror image reaches ~4.5 units in front of its base.
        this.maskReflection(x - 0.1, 2.6, 3.0, 5.2)

        // The hero's grounding: with its reflection removed, the soft contact
        // shadow is what seats the speaker on the floor. Strongest of the set.
        this.contactShadow(x, 0.4, 0.95, 0.6)

        // God-ray cast shadow: the beat-01 key hangs toward +x/+z (see
        // keyOffsets), so the speaker's shade trails away left and slightly
        // toward the wall. Two fading blobs extend the real PCF shadow into
        // a readable directional cast on the open floor.
        this.contactShadow(x - 0.85, 0.15, 0.8, 0.32)
        this.contactShadow(x - 1.55, -0.15, 0.65, 0.2)

        // The hero keeps its authored WebGI key + rim spots (the webgi-viewer
        // look): the key rakes a specular streak down the cabinet's camera
        // side, the rim separates the dark back edge from the wall. Intensity
        // trimmed hard — the authored 30 cd studio values are scaled for a
        // black void, not the pale gallery.
        const speaker = this.placeModel('floorstanding-loudspeaker', { axis: 'y', size: 1.9, x, z: 0.4, rotY: -0.42, rig: ['Key_Light', 'Rim_Light'], rigIntensity: 0.25 })
        if(speaker)
        {
            return
        }

        // Primitive fallback (manifest shipped no model).
        this.box(0.5, 1.7, 0.6, this.matteBlack, x, 0.9, 0)
        this.brassFeet(x, 0, 0.5, 0.6)

        // Drivers on the front face.
        this.cylinder(0.12, 0.12, 0.028, this.blackDetail, x, 1.42, 0.31).rotation.x = Math.PI / 2
        this.cylinder(0.16, 0.16, 0.028, this.blackDetail, x, 0.92, 0.31).rotation.x = Math.PI / 2
        this.cylinder(0.16, 0.16, 0.028, this.blackDetail, x, 0.5, 0.31).rotation.x = Math.PI / 2
    }

    /** beat 02 (signature) — turntable, amplifier, CD player becoming one
     *  system. The speakers belong to beats 01 and 07; this beat is about the
     *  source-and-control chain. */
    setVignette02()
    {
        const cx = VIGNETTE_X[1]

        for(const ox of [-1.05, 0, 1.05])
            this.contactShadow(cx + ox, 0, 0.7, 0.22)

        // Turntable, integrated amplifier, CD player — three separated forms
        // standing directly in the gallery, at matching real-world component
        // widths (a full-size hi-fi chassis is ~0.44 m; everything here is
        // scaled ×1.8 together so the trio carries the frame behind the
        // centred approach cards without breaking relative proportions).
        // Each swaps to its GLB independently; any missing key keeps its
        // primitive stand-in.
        const ttModel = this.placeModel('turntable', { axis: 'x', size: 1.0, x: cx - 1.05, z: 0 })
        if(ttModel)
        {
            this.reflectModel(ttModel)
        }
        else
        {
            const tt = this.box(0.8, 0.14, 0.6, this.matteBlack, cx - 1.05, 0.07, 0)
            this.cylinder(0.26, 0.26, 0.05, this.blackDetail, cx - 1.6, 0.165, 0)
            this.cylinder(0.012, 0.012, 0.08, this.brass, cx - 1.6, 0.21, 0)
            this.reflect(tt)
        }

        const ampModel = this.placeModel('integrated-amplifier', { axis: 'x', size: 0.8, x: cx, z: 0 })
        if(ampModel)
        {
            this.reflectModel(ampModel)
        }
        else
        {
            const amp = this.box(0.8, 0.31, 0.6, this.matteBlack, cx, 0.155, 0)
            const knobL = this.cylinder(0.045, 0.045, 0.04, this.brass, cx - 0.2, 0.18, 0.31)
            knobL.rotation.x = Math.PI / 2
            const knobR = this.cylinder(0.045, 0.045, 0.04, this.brass, cx + 0.2, 0.18, 0.31)
            knobR.rotation.x = Math.PI / 2
            this.reflect(amp)
        }

        const cdModel = this.placeModel('cd-player', { axis: 'x', size: 0.8, x: cx + 1.05, z: 0 })
        if(cdModel)
        {
            this.reflectModel(cdModel)
        }
        else
        {
            const cd = this.box(0.8, 0.2, 0.6, this.matteBlack, cx + 1.05, 0.1, 0)
            this.cylinder(0.06, 0.06, 0.014, this.brass, cx + 1.05, 0.21, 0.14)
            this.reflect(cd)
        }

        // (No gold axis line here anymore — like beat 07's gold circle, it
        // read as an unexplained yellow stripe on the floor and is gone.)
    }

    /** beat 03 — three plinths receding diagonally, one component each:
     *  turntable, integrated amplifier, digital source. The speakers belong to
     *  beats 01 and 07; fewer, larger pieces read better as a curated set. */
    setVignette03()
    {
        const cx = VIGNETTE_X[2]
        const spots = [
            [cx - 1.7, 0.8], [cx - 0.1, 0.1], [cx + 1.5, -0.6]
        ]

        for(const [x, z] of spots)
        {
            // The plinths stand directly on the gallery floor, so they earn a
            // floor reflection like the beat-02 components — the components on
            // top do not (they sit on the plinths, not the floor).
            const plinth = this.box(0.9, 0.5, 0.9, this.plinth, x, 0.25, z)
            this.reflect(plinth)
            this.contactShadow(x, z, 0.85, 0.24)
        }

        // One component per plinth top (y = 0.5), each independently a GLB or
        // its primitive stand-in.

        // Turntable: plinth box + platter + brass spindle.
        const [tx, tz] = spots[0]
        if(!this.placeModel('turntable', { axis: 'x', size: 0.88, x: tx, y: 0.5, z: tz }))
        {
            this.box(0.66, 0.1, 0.5, this.matteBlack, tx, 0.55, tz)
            this.cylinder(0.2, 0.2, 0.04, this.blackDetail, tx, 0.62, tz)
            this.cylinder(0.01, 0.01, 0.06, this.brass, tx, 0.66, tz)
        }

        // Integrated amplifier face.
        const [ax, az] = spots[1]
        if(!this.placeModel('integrated-amplifier', { axis: 'x', size: 0.66, x: ax, y: 0.5, z: az }))
        {
            this.box(0.66, 0.24, 0.5, this.matteBlack, ax, 0.62, az)
            this.cylinder(0.04, 0.04, 0.035, this.brass, ax + 0.16, 0.64, az + 0.26).rotation.x = Math.PI / 2
        }

        // Compact digital source.
        const [dx, dz] = spots[2]
        if(!this.placeModel('cd-player', { axis: 'x', size: 0.66, x: dx, y: 0.5, z: dz }))
        {
            this.box(0.56, 0.16, 0.46, this.matteBlack, dx, 0.58, dz)
            this.cylinder(0.03, 0.03, 0.02, this.brass, dx + 0.15, 0.6, dz + 0.24).rotation.x = Math.PI / 2
        }
    }

    /** beat 04 — audition table: component, gloves, brass weight, chair. */
    setVignette04()
    {
        const cx = VIGNETTE_X[3]

        this.contactShadow(cx, 0, 1.5, 0.2)
        this.contactShadow(cx + 1.35, 1.0, 0.62, 0.3)

        // Table: top slab + four legs — legs in the chair's graphite (both are
        // furniture; pure matte black beside the lifted chair read mismatched).
        this.box(2.2, 0.06, 0.9, this.plinth, cx, 0.72, 0)
        for(const [ox, oz] of [[-1.0, -0.38], [1.0, -0.38], [-1.0, 0.38], [1.0, 0.38]])
        {
            this.box(0.06, 0.72, 0.06, this.chairShell, cx + ox, 0.36, oz)
        }

        // Turntable mid-audition, seated on the table top (y = 0.75). Sized to
        // read as a real ~44 cm deck against the 2.2-unit table; kept right of
        // the table centre so the founder copy above stays clear of it.
        if(!this.placeModel('turntable', { axis: 'x', size: 0.82, x: cx - 0.05, y: 0.75, z: 0 }))
        {
            this.box(0.82, 0.2, 0.56, this.matteBlack, cx - 0.05, 0.85, 0)
            this.cylinder(0.045, 0.045, 0.035, this.brass, cx + 0.2, 0.88, 0.29).rotation.x = Math.PI / 2
        }

        // White cotton gloves, set down beside it.
        const gloveA = this.box(0.16, 0.02, 0.08, this.glove, cx + 0.55, 0.765, 0.12)
        gloveA.rotation.y = 0.4
        const gloveB = this.box(0.16, 0.02, 0.08, this.glove, cx + 0.68, 0.765, -0.02)
        gloveB.rotation.y = -0.25

        // Small brass alignment weight.
        this.cylinder(0.045, 0.055, 0.07, this.brass, cx + 0.95, 0.79, 0.1)

        // Chair just pulled back from listening position — beside the table so
        // the audition tabletop stays the subject.
        this.primitiveChair(cx + 1.35, 1.0, -0.5, {
            seatW: 0.46, seatD: 0.44, seatH: 0.45, backH: 0.5, legT: 0.04
        })
    }

    /** beat 07 — the listening position: a realistic near-field stereo pair,
     *  toed in toward the listener; the chair reads small and secondary. */
    setVignette07()
    {
        const cx = VIGNETTE_X[4]

        for(const ox of [-1.3, 1.3])
            this.contactShadow(cx + ox, -0.6, 0.9, 0.3)
        this.contactShadow(cx, 2.1, 0.6, 0.26)

        // The stereo pair carries the frame: closer together (a real ~2.5 m
        // triangle), larger, toed in toward the listening spot. Each
        // placeModel() call clones the one loaded GLB.
        for(const ox of [-1.3, 1.3])
        {
            const toeIn = ox < 0 ? 0.3 : -0.3
            // The pair keeps only the authored rim spot (the key would fight
            // beat 07's dimmed grade): enough to lift the cabinets' back
            // edges off the darkened wall so they read as forms, not cutouts.
            const speakerModel = this.placeModel('floorstanding-loudspeaker', { axis: 'y', size: 1.55, x: cx + ox, z: -0.6, rotY: toeIn, rig: ['Rim_Light'], rigIntensity: 0.15 })
            if(speakerModel)
            {
                this.reflectModel(speakerModel)
                continue
            }

            const speaker = this.box(0.46, 1.55, 0.56, this.matteBlack, cx + ox, 0.85, -0.6)
            this.brassFeet(cx + ox, -0.6, 0.46, 0.56)
            this.cylinder(0.12, 0.12, 0.026, this.blackDetail, cx + ox, 1.32, -0.31).rotation.x = Math.PI / 2
            this.cylinder(0.15, 0.15, 0.026, this.blackDetail, cx + ox, 0.66, -0.31).rotation.x = Math.PI / 2
            this.reflect(speaker)
        }

        // Single low chair at the apex of the listening triangle, pushed back
        // and kept small so the speakers stay the subject of the frame, seat
        // turned toward the pair (the listener's view, not ours).
        const chairModel = this.placeModel('low-listening-chair', { axis: 'x', size: 0.6, x: cx, z: 2.1, rotY: Math.PI })
        if(chairModel)
        {
            // Haze the chair toward the room tone: its dark rosewood/leather
            // is by far the highest-contrast object in the pale gallery. An
            // emissive lift (works over textured materials too) reads as the
            // room's air catching it, keeping the wood detail but blending it.
            const roomTone = new THREE.Color('#cdd6e2')
            chairModel.traverse((child) =>
            {
                if(child.isMesh)
                {
                    for(const m of Array.isArray(child.material) ? child.material : [child.material])
                    {
                        m.emissive = roomTone.clone()
                        m.emissiveIntensity = 0.16
                    }
                }
            })
        }
        else
        {
            this.primitiveChair(cx, 2.1, Math.PI, {
                seatW: 0.44, seatD: 0.42, seatH: 0.3, backH: 0.32, legT: 0.035
            })
        }

        // (No gold floor catch and no wall niche panels here anymore — the
        // gold circle read as an unexplained yellow oval around the chair, and
        // the niche bands read as stray rectangles on the wall.)
    }

    // ── per-frame ────────────────────────────────────────────────────────

    /** 0 before `a`, 1 after `b`, smooth in between. */
    ramp(t, a, b)
    {
        const x = Math.min(1, Math.max(0, (t - a) / (b - a)))
        return x * x * (3 - 2 * x)
    }

    updateCamera(progress)
    {
        // Find the active beat.
        let i = this.beats.length - 1
        for(let k = 0; k < this.beats.length; k++)
        {
            if(progress <= this.beats[k].to) { i = k; break }
        }
        const beat = this.beats[i]
        const cam = this.beatCams[i]
        const span = Math.max(beat.to - beat.from, 1e-6)
        const t = Math.min(1, Math.max(0, (progress - beat.from) / span))

        // Motion extends each beat's scrub past the pin into the inter-section
        // gap (see setBeatScrub). settle/depart are authored PIN-relative, so
        // convert: tPin runs 0→1 across the pinned range only, and the depart
        // travel maps over everything from the depart point to the extended
        // end — the room-to-room dolly rides the whole gap instead of
        // cramming into the pin's tail.
        const scale = this.experience.sceneState.beatScales?.[i] || 1
        const tPin = t / scale

        // How far the depart dolly has traveled toward the next room (0 while
        // approaching/settled) — updateLightTrims blends the two rooms' light
        // grades with it, so a trimmed room never shows the previous room's
        // lighting during the arrival.
        let departK = 0

        const a = cam.a, s = cam.s
        if(tPin <= cam.settle)
        {
            const k = this.ramp(tPin, 0, cam.settle)
            this.camPos.set(...a.pos).lerp(this.tmp.set(...s.pos), k)
            this.camTgt.set(...a.tgt).lerp(this.tmp.set(...s.tgt), k)
        }
        else if(tPin <= cam.depart || i === this.beatCams.length - 1)
        {
            this.camPos.set(...s.pos)
            this.camTgt.set(...s.tgt)
        }
        else
        {
            const next = this.beatCams[i + 1]
            const k = this.ramp(t, cam.depart * scale, 1)
            departK = k
            this.camPos.set(...s.pos).lerp(this.tmp.set(...next.a.pos), k)
            this.camTgt.set(...s.tgt).lerp(this.tmp.set(...next.a.tgt), k)
        }

        const rig = this.experience.camera.modes.default.instance
        rig.position.copy(this.camPos)
        rig.lookAt(this.camTgt)

        // Key light + shadow camera track the gallery position so soft shadows
        // stay crisp near the framed vignette; the wall fill follows along.
        // The shadow map re-renders only when the key has moved MEANINGFULLY
        // (shadowMap.autoUpdate is off — the scene's meshes never move). The
        // 0.15-unit threshold is the scroll-smoothness lever: at 0.002 every
        // scrubbed frame of a room-to-room dolly paid a full-scene shadow
        // depth pass; at 0.15 the bake lands every ~few frames, and a soft
        // 9-unit-high spotlight pool lagging ≤0.15 units is invisible.
        // Beat 01's slanted key (the god-ray direction) eases in and out here;
        // the eased offset joins the rebake check so the shadow tracks the
        // light through the transition, and keeps frames coming while easing.
        const keyOff = this.keyOffsets[i] ?? { x: 0, z: 0 }
        this.keyOffCur ??= { x: keyOff.x, z: keyOff.z }
        this.keyOffCur.x += (keyOff.x - this.keyOffCur.x) * 0.08
        this.keyOffCur.z += (keyOff.z - this.keyOffCur.z) * 0.08
        if(Math.abs(keyOff.x - this.keyOffCur.x) > 0.01 || Math.abs(keyOff.z - this.keyOffCur.z) > 0.01)
            this.experience.needsRender = true
        const keyX = this.camTgt.x + this.keyOffCur.x

        if(Math.abs(keyX - (this.lastShadowX ?? Infinity)) > 0.15)
        {
            this.lastShadowX = keyX
            this.experience.renderer.instance.shadowMap.needsUpdate = true
        }
        this.key.position.set(keyX, 9, 2.5 + this.keyOffCur.z)
        this.key.target.position.set(this.camTgt.x, 0, 0)
        this.fill.position.set(this.camTgt.x, 4, 12)
        this.fill.target.position.set(this.camTgt.x, 2, -4.5)

        // localT stays PIN-relative (clamped) so the light trims keep their
        // authored timing against the pinned copy.
        return { beatIndex: i, localT: Math.min(tPin, 1), departK }
    }

    /** Ease the light rig toward the active beat's exposure trim. Exponential
     *  smoothing avoids a pop at beat boundaries; the needsRender flag keeps
     *  frames coming until the ease lands (render-on-demand would otherwise
     *  freeze a half-trimmed frame when scrolling stops mid-transition).
     *
     *  During the room-to-room dolly the target blends toward the NEXT beat's
     *  trim, and the lighting LEADS the camera (the blend completes by 60% of
     *  the travel): the beat index flips only at the scroll boundary, so
     *  without this a trimmed room (beat 03) spends the whole arrival
     *  under the previous room's untrimmed rig — plinths washed to white —
     *  and only grades down after the visitor has already settled.
     *
     *  `late` trims (beat 07) invert that: leading the dolly left the long
     *  canvas band behind the services section sitting in the dimmed grade.
     *  A late room stays at the neutral bright grade through the travel, then
     *  dims in with the arrival (scrub-linked, completing at the camera
     *  settle) — the light falls exactly as the stereo pair takes the frame. */
    updateLightTrims(beatIndex, departK = 0, localT = 0)
    {
        const fallback = { key: 1, fill: 1, env: 1, hemi: 1, vig: 1, fog: 1 }
        let cur = this.lightTrims[beatIndex] ?? fallback
        let next = this.lightTrims[beatIndex + 1] ?? cur

        if(next.late)
            next = fallback

        if(cur.late)
        {
            const arriveK = this.ramp(localT, 0.06, this.beatCams[beatIndex]?.settle ?? 0.35)
            cur = {
                key: 1 + (cur.key - 1) * arriveK,
                fill: 1 + (cur.fill - 1) * arriveK,
                env: 1 + (cur.env - 1) * arriveK,
                hemi: 1 + (cur.hemi - 1) * arriveK,
                vig: 1 + (cur.vig - 1) * arriveK,
                fog: 1 + ((cur.fog ?? 1) - 1) * arriveK
            }
        }

        const k = this.ramp(departK, 0, 0.6)
        const mix = (a, b) => a + (b - a) * k

        const keyTarget = this.keyBase * mix(cur.key, next.key)
        const fillTarget = this.fillBase * mix(cur.fill, next.fill)
        const envTarget = this.envBase * mix(cur.env, next.env)
        const hemiTarget = this.hemiBase * mix(cur.hemi, next.hemi)

        this.key.intensity += (keyTarget - this.key.intensity) * 0.08
        this.fill.intensity += (fillTarget - this.fill.intensity) * 0.08
        this.hemi.intensity += (hemiTarget - this.hemi.intensity) * 0.08
        this.scene.environmentIntensity += (envTarget - this.scene.environmentIntensity) * 0.08

        // Fog colour grade — scale the base colour and ease toward it in-place.
        // The renderer CLEAR COLOUR tracks the fog exactly: at beat 07's camera
        // distance most of the frame is fog-saturated wall plus geometry-free
        // backdrop, so the pale clear colour is what actually reads as "the
        // room's light level" — grade the fog alone and the horizon splits.
        if(this.scene.fog)
        {
            this.fogTarget.copy(this.fogBase).multiplyScalar(mix(cur.fog ?? 1, next.fog ?? 1))
            this.scene.fog.color.lerp(this.fogTarget, 0.08)
            this.experience.renderer.instance.setClearColor(this.scene.fog.color, 1)
        }

        // The CSS vignette overlay grades with the beat too (deepest in beat
        // 07). It's DOM opacity — compositor-only, no WebGL render needed, and
        // update() runs every rAF so the ease completes on its own.
        this.vignetteEl ??= this.experience.targetElement?.querySelector('.experience__vignette')
        if(this.vignetteEl)
        {
            this.vigCurrent ??= 0.45
            const vigTarget = Math.min(1, 0.45 * mix(cur.vig, next.vig))
            if(Math.abs(vigTarget - this.vigCurrent) > 0.002)
            {
                this.vigCurrent += (vigTarget - this.vigCurrent) * 0.08
                this.vignetteEl.style.opacity = this.vigCurrent.toFixed(3)
            }
        }

        if(Math.abs(keyTarget - this.key.intensity) > 0.005
            || Math.abs(fillTarget - this.fill.intensity) > 0.005
            || Math.abs(hemiTarget - this.hemi.intensity) > 0.005
            || Math.abs(envTarget - this.scene.environmentIntensity) > 0.002
            || (this.scene.fog && Math.abs(this.fogTarget.r - this.scene.fog.color.r) > 0.002))
        {
            this.experience.needsRender = true
        }
    }

    resize()
    {
    }

    update()
    {
        if(!this.built)
            return

        const progress = this.experience.sceneState.scrollProgress
        const { beatIndex, localT, departK } = this.updateCamera(progress)
        this.updateLightTrims(beatIndex, departK, localT)
    }

    destroy()
    {
        for(const geometry of this.disposables.geometries)
            geometry.dispose()
        for(const material of this.disposables.materials)
            material.dispose()
        for(const texture of this.disposables.textures)
            texture.dispose()

        this.scene.environment = null
        this.scene.fog = null
        this.scene.clear()
    }
}
