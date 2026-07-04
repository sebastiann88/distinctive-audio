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
 *  - gold (#f0aa10) is a scarce scripted event: the signal-path line resolving
 *    on the floor in beat 02, the floor catch at the listening spot in beat 07
 *    — edge catches elsewhere, never ambient, never a wash.
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
            { a: { pos: [48.0, 1.05, 7.8], tgt: [48.0, 0.90, 0] },  s: { pos: [48.0, 1.05, 7.5], tgt: [48.0, 0.88, 0] },   settle: 0.25, depart: 0.84 },
            // 07: the ARRIVAL waits just left of the listening room (empty
            // gallery in frame — the speakers must NOT loom in the canvas
            // slivers behind the address/services bands), then a long lateral
            // dolly brings the stereo pair gliding in from the right, settling
            // tight on it. The chair reads small at the bottom.
            { a: { pos: [58.2, 1.15, 7.8], tgt: [59.0, 0.95, -0.4] }, s: { pos: [64.0, 1.08, 6.2], tgt: [64.0, 0.85, -0.5] }, settle: 0.22, depart: 1.01 }
        ]

        this.disposables = { geometries: [], materials: [], textures: [] }
        this.trackedModels = new Set()
        this.camPos = new THREE.Vector3()
        this.camTgt = new THREE.Vector3()
        this.tmp = new THREE.Vector3()

        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.build()
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
     */
    placeModel(name, { axis, size, x, y = 0, z, rotY = 0 })
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
        }

        const model = source.clone()

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

    /** reflect(), for a placed model group: mirrored clone in the shared
     *  reflection material. */
    reflectModel(model)
    {
        const clone = model.clone()
        clone.traverse((child) =>
        {
            if(child.isMesh)
            {
                child.material = this.reflection
                child.castShadow = false
                child.receiveShadow = false
            }
        })
        clone.scale.y *= -1
        clone.position.y *= -1
        this.scene.add(clone)
        return clone
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
    }

    // ── build ────────────────────────────────────────────────────────────

    build()
    {
        this.setEnvironment()
        this.setMaterials()
        this.setGallery()
        this.setLights()
        this.setVignette01()
        this.setVignette02()
        this.setVignette03()
        this.setVignette04()
        this.setVignette07()

        // Freeze static transforms: every mesh in the gallery is stationary
        // (only the camera rig and the key/fill lights move), so skip the
        // per-frame local-matrix recomposition for the whole mesh population.
        // Materials still animate (gold opacities) — that doesn't touch matrices.
        this.scene.traverse((child) =>
        {
            if(child.isMesh)
            {
                child.updateMatrix()
                child.matrixAutoUpdate = false
            }
        })

        this.built = true
        // First frame of the built scene must render even if the user has not
        // scrolled (render-on-demand skips unchanged frames), and the throttled
        // shadow map needs its first bake.
        this.experience.needsRender = true
        this.experience.renderer.instance.shadowMap.needsUpdate = true
    }

    setEnvironment()
    {
        const renderer = this.experience.renderer.instance
        const pmrem = new THREE.PMREMGenerator(renderer)

        // Prefer the HDR shipped by the page manifest (name: 'environment') —
        // real image-based lighting gives the matte-black GLBs believable
        // specular gradients and lets the brass pick up warm reflections.
        // Without it, fall back to the neutral procedural RoomEnvironment.
        // Intensity stays restrained either way so the cool pale skylight mood
        // governs; override per page via sceneConfig.environmentIntensity.
        const hdr = this.resources.items['environment']
        if(hdr)
        {
            this.envMap = pmrem.fromEquirectangular(hdr).texture
            hdr.dispose()
            this.scene.environmentIntensity = this.sceneConfig.environmentIntensity ?? 0.45
        }
        else
        {
            this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
            this.scene.environmentIntensity = this.sceneConfig.environmentIntensity ?? 0.25
        }
        pmrem.dispose()
        this.envBase = this.scene.environmentIntensity

        this.disposables.textures.push(this.envMap)
        this.scene.environment = this.envMap

        // Fog pulled in so floor and wall converge to the same tone where they
        // meet (~12+ units out) — part of erasing the hard horizon line.
        this.scene.fog = new THREE.Fog(this.colors.ground, 11, 30)
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
        // POLISHED pale concrete floor — low roughness so it picks up a real
        // environment sheen (the reference's glossy museum floor); envMap
        // intensity restrained so the pale ground doesn't blow out. The
        // mirrored reflection clones read against this sheen.
        const floor = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 32)),
            this.mat(new THREE.MeshStandardMaterial({
                color: '#e2e8f1', roughness: 0.56, metalness: 0,
                envMapIntensity: 0.22
            }))
        )
        floor.rotation.x = -Math.PI / 2
        floor.position.set(32, 0, 2)
        floor.receiveShadow = true
        this.scene.add(floor)

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
        const floorTone = new THREE.Color('#e6ebf3')
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
                    opacity: x === VIGNETTE_X[4] ? 0.4 : 0.28,
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
        this.lightTrims = [
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1 },
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1 },
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1 },
            { key: 1, fill: 1, env: 1, hemi: 1, vig: 1 },
            { key: 0.9, fill: 0.22, env: 0.3, hemi: 0.55, vig: 2.6 }
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
        this.key.shadow.radius = 8
        this.key.shadow.bias = -0.0002
        this.key.shadow.normalBias = 0.03
        this.key.shadow.camera.near = 0.5
        this.key.shadow.camera.far = 20
        this.scene.add(this.key)
        this.scene.add(this.key.target)
    }

    /** beat 01 — single floorstander, large and impressive in the RIGHT of
     *  frame (the hero copy holds the left half), angled slightly to camera. */
    setVignette01()
    {
        const x = VIGNETTE_X[0] + 1.6

        const speaker = this.placeModel('floorstanding-loudspeaker', { axis: 'y', size: 1.9, x, z: 0.4, rotY: -0.42 })
        if(speaker)
        {
            this.reflectModel(speaker)
            return
        }

        // Primitive fallback (manifest shipped no model).
        const column = this.box(0.5, 1.7, 0.6, this.matteBlack, x, 0.9, 0)
        this.brassFeet(x, 0, 0.5, 0.6)

        // Drivers on the front face.
        this.cylinder(0.12, 0.12, 0.028, this.blackDetail, x, 1.42, 0.31).rotation.x = Math.PI / 2
        this.cylinder(0.16, 0.16, 0.028, this.blackDetail, x, 0.92, 0.31).rotation.x = Math.PI / 2
        this.cylinder(0.16, 0.16, 0.028, this.blackDetail, x, 0.5, 0.31).rotation.x = Math.PI / 2

        this.reflect(column)
    }

    /** beat 02 (signature) — turntable, amplifier, CD player becoming one
     *  system. The speakers belong to beats 01 and 07; this beat is about the
     *  source-and-control chain. */
    setVignette02()
    {
        const cx = VIGNETTE_X[1]

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

        // The scripted gold event — THIS BEAT ONLY. A thin gold line resolves
        // on the floor beneath the three components as the system aligns (the
        // signal path made literal; the old travelling dot read as an
        // unexplained yellow ball and is gone).
        this.goldAxisMat = this.mat(new THREE.MeshBasicMaterial({
            color: this.colors.accent, transparent: true, opacity: 0
        }))
        this.goldAxis = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(3.1, 0.022)), this.goldAxisMat)
        this.goldAxis.rotation.x = -Math.PI / 2
        this.goldAxis.position.set(cx, 0.012, 0.5)
        this.scene.add(this.goldAxis)
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
            this.box(0.9, 0.5, 0.9, this.plinth, x, 0.25, z)
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

        // Table: top slab + four legs.
        this.box(2.2, 0.06, 0.9, this.plinth, cx, 0.72, 0)
        for(const [ox, oz] of [[-1.0, -0.38], [1.0, -0.38], [-1.0, 0.38], [1.0, 0.38]])
        {
            this.box(0.06, 0.72, 0.06, this.matteBlack, cx + ox, 0.36, oz)
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
        const chair = new THREE.Group()
        chair.position.set(cx + 1.35, 0, 1.0)
        chair.rotation.y = -0.5
        this.scene.add(chair)
        this.box(0.46, 0.05, 0.44, this.matteBlack, 0, 0.45, 0, chair)
        this.box(0.46, 0.5, 0.05, this.matteBlack, 0, 0.72, -0.2, chair)
        for(const [ox, oz] of [[-0.19, -0.18], [0.19, -0.18], [-0.19, 0.18], [0.19, 0.18]])
        {
            this.box(0.04, 0.45, 0.04, this.matteBlack, ox, 0.22, oz, chair)
        }
    }

    /** beat 07 — the listening position: a realistic near-field stereo pair,
     *  toed in toward the listener; the chair reads small and secondary. */
    setVignette07()
    {
        const cx = VIGNETTE_X[4]

        // The stereo pair carries the frame: closer together (a real ~2.5 m
        // triangle), larger, toed in toward the listening spot. Each
        // placeModel() call clones the one loaded GLB.
        for(const ox of [-1.3, 1.3])
        {
            const toeIn = ox < 0 ? 0.3 : -0.3
            const speakerModel = this.placeModel('floorstanding-loudspeaker', { axis: 'y', size: 1.55, x: cx + ox, z: -0.6, rotY: toeIn })
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
            const chair = new THREE.Group()
            chair.position.set(cx, 0, 2.1)
            chair.rotation.y = Math.PI
            this.scene.add(chair)
            this.box(0.44, 0.05, 0.42, this.matteBlack, 0, 0.3, 0, chair)
            this.box(0.44, 0.3, 0.05, this.matteBlack, 0, 0.47, -0.19, chair)
            for(const [ox, oz] of [[-0.18, -0.17], [0.18, -0.17], [-0.18, 0.17], [0.18, 0.17]])
            {
                this.box(0.035, 0.3, 0.035, this.matteBlack, ox, 0.15, oz, chair)
            }
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
            this.camPos.set(...s.pos).lerp(this.tmp.set(...next.a.pos), k)
            this.camTgt.set(...s.tgt).lerp(this.tmp.set(...next.a.tgt), k)
        }

        const rig = this.experience.camera.modes.default.instance
        rig.position.copy(this.camPos)
        rig.lookAt(this.camTgt)

        // Key light + shadow camera track the gallery position so soft shadows
        // stay crisp near the framed vignette; the wall fill follows along.
        // The shadow map re-renders only when the key actually moved
        // (shadowMap.autoUpdate is off — the scene's meshes never move).
        if(Math.abs(this.camTgt.x - (this.lastShadowX ?? Infinity)) > 0.002)
        {
            this.lastShadowX = this.camTgt.x
            this.experience.renderer.instance.shadowMap.needsUpdate = true
        }
        this.key.position.set(this.camTgt.x, 9, 2.5)
        this.key.target.position.set(this.camTgt.x, 0, 0)
        this.fill.position.set(this.camTgt.x, 4, 12)
        this.fill.target.position.set(this.camTgt.x, 2, -4.5)

        // localT stays PIN-relative (clamped) so the gold accents and light
        // trims keep their authored timing against the pinned copy.
        return { beatIndex: i, localT: Math.min(tPin, 1) }
    }

    updateGoldAccents(beatIndex, t)
    {
        // Beat 02: the gold axis line resolves on the floor once the camera
        // has mostly settled, then fades as the beat departs (transition_out).
        this.goldAxisMat.opacity = (beatIndex === 1)
            ? this.ramp(t, 0.4, 0.62) * (1 - this.ramp(t, 0.82, 0.96)) * 0.85
            : 0
    }

    /** Ease the light rig toward the active beat's exposure trim. Exponential
     *  smoothing avoids a pop at beat boundaries; the needsRender flag keeps
     *  frames coming until the ease lands (render-on-demand would otherwise
     *  freeze a half-trimmed frame when scrolling stops mid-transition). */
    updateLightTrims(beatIndex)
    {
        const trim = this.lightTrims[beatIndex] ?? { key: 1, fill: 1, env: 1, hemi: 1, vig: 1 }
        const keyTarget = this.keyBase * trim.key
        const fillTarget = this.fillBase * trim.fill
        const envTarget = this.envBase * trim.env
        const hemiTarget = this.hemiBase * trim.hemi

        this.key.intensity += (keyTarget - this.key.intensity) * 0.08
        this.fill.intensity += (fillTarget - this.fill.intensity) * 0.08
        this.hemi.intensity += (hemiTarget - this.hemi.intensity) * 0.08
        this.scene.environmentIntensity += (envTarget - this.scene.environmentIntensity) * 0.08

        // The CSS vignette overlay grades with the beat too (deepest in beat
        // 07). It's DOM opacity — compositor-only, no WebGL render needed, and
        // update() runs every rAF so the ease completes on its own.
        this.vignetteEl ??= this.experience.targetElement?.querySelector('.experience__vignette')
        if(this.vignetteEl)
        {
            this.vigCurrent ??= 0.45
            const vigTarget = Math.min(1, 0.45 * trim.vig)
            if(Math.abs(vigTarget - this.vigCurrent) > 0.002)
            {
                this.vigCurrent += (vigTarget - this.vigCurrent) * 0.08
                this.vignetteEl.style.opacity = this.vigCurrent.toFixed(3)
            }
        }

        if(Math.abs(keyTarget - this.key.intensity) > 0.005
            || Math.abs(fillTarget - this.fill.intensity) > 0.005
            || Math.abs(hemiTarget - this.hemi.intensity) > 0.005
            || Math.abs(envTarget - this.scene.environmentIntensity) > 0.002)
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
        const { beatIndex, localT } = this.updateCamera(progress)
        this.updateGoldAccents(beatIndex, localT)
        this.updateLightTrims(beatIndex)
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
