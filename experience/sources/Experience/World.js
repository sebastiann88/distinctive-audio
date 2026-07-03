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
 * First-pass geometry is primitive (proportioned per each beat's `canvas`
 * column). Production GLBs swap in later through the manifest only — nothing
 * here hardcodes a geometry path.
 *
 * Art direction (style-ref TAKE list + register):
 *  - cool pale ground (#f4f7fb family), soft skylight pools, no hard shadows
 *  - matte-black objects defined by silhouette, brass micro-details only
 *  - gold (#f0aa10) is a scarce scripted event: signal-path glint in beat 02,
 *    floor catch at the listening spot in beat 07 — edge catches elsewhere,
 *    never ambient, never a wash.
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
            { a: { pos: [-1.7, 1.15, 7.6], tgt: [0.9, 1.10, 0] },   s: { pos: [-0.7, 1.13, 7.1], tgt: [1.2, 1.05, 0] },    settle: 0.30, depart: 0.80 },
            { a: { pos: [14.2, 1.08, 7.9], tgt: [15.3, 0.90, 0] },  s: { pos: [16.0, 1.06, 7.0], tgt: [16.0, 0.85, 0] },   settle: 0.70, depart: 0.88 },
            { a: { pos: [29.0, 1.35, 8.8], tgt: [32.2, 0.75, -0.6] }, s: { pos: [30.2, 1.30, 8.0], tgt: [32.6, 0.70, -0.8] }, settle: 0.30, depart: 0.82 },
            { a: { pos: [48.0, 1.05, 7.8], tgt: [48.0, 0.90, 0] },  s: { pos: [48.0, 1.05, 7.5], tgt: [48.0, 0.88, 0] },   settle: 0.25, depart: 0.84 },
            { a: { pos: [64.0, 1.15, 9.2], tgt: [64.0, 1.00, 0] },  s: { pos: [64.0, 1.12, 8.4], tgt: [64.0, 0.98, 0] },   settle: 0.30, depart: 1.01 }
        ]

        this.disposables = { geometries: [], materials: [], textures: [] }
        this.camPos = new THREE.Vector3()
        this.camTgt = new THREE.Vector3()

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

    /** Soft circular skylight pool on the floor under a vignette. */
    skylightPool(x, radius)
    {
        const mesh = new THREE.Mesh(
            this.geo(new THREE.CircleGeometry(radius, 48)),
            this.mat(new THREE.MeshBasicMaterial({
                color: '#ffffff',
                transparent: true,
                opacity: 0.30,
                depthWrite: false
            }))
        )
        mesh.rotation.x = -Math.PI / 2
        mesh.position.set(x, 0.008, 0.4)
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

        this.built = true
    }

    setEnvironment()
    {
        // Neutral procedural env map so matte PBR holds a thin specular edge and
        // brass reads as metal — no HDR asset needed for the first pass. Kept low
        // so the cool pale skylight mood governs.
        const renderer = this.experience.renderer.instance
        const pmrem = new THREE.PMREMGenerator(renderer)
        this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
        this.disposables.textures.push(this.envMap)
        this.scene.environment = this.envMap
        this.scene.environmentIntensity = 0.25

        this.scene.fog = new THREE.Fog(this.colors.ground, 14, 34)
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
        // Pale plinths / table.
        this.plinth = this.mat(new THREE.MeshStandardMaterial({
            color: '#e8edf4', roughness: 0.85, metalness: 0
        }))
        // White cotton gloves.
        this.glove = this.mat(new THREE.MeshStandardMaterial({
            color: '#f5f2ea', roughness: 0.95, metalness: 0
        }))
        // Shared reflection material (mirrored clones).
        this.reflection = this.mat(new THREE.MeshBasicMaterial({
            color: '#3a4250', transparent: true, opacity: 0.06, depthWrite: false
        }))
        // Gold luminous material — beats 02 and 07 ONLY. Unlit so it reads as a
        // scripted light event against the pale gallery.
        this.gold = this.mat(new THREE.MeshBasicMaterial({
            color: this.colors.accent, transparent: true, opacity: 0
        }))
    }

    setGallery()
    {
        // Polished pale concrete floor. A touch of emissive lifts the pale
        // ground toward its albedo (no tone mapping to recover a dim render)
        // without brightening the lights that shape the black objects.
        const floor = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 32)),
            this.mat(new THREE.MeshStandardMaterial({
                color: '#edf1f7', roughness: 0.9,
                emissive: '#edf1f7', emissiveIntensity: 0.25
            }))
        )
        floor.rotation.x = -Math.PI / 2
        floor.position.set(32, 0, 2)
        floor.receiveShadow = true
        this.scene.add(floor)

        // Back wall, blending into the ground color (soft cove via fog).
        const wall = new THREE.Mesh(
            this.geo(new THREE.PlaneGeometry(120, 12)),
            this.mat(new THREE.MeshStandardMaterial({
                color: this.colors.ground, roughness: 1,
                emissive: this.colors.ground, emissiveIntensity: 0.4
            }))
        )
        wall.position.set(32, 6, -4.5)
        wall.receiveShadow = true
        this.scene.add(wall)

        // Room seams between vignettes — the "vertical wall seam" the camera
        // wipes past in transitions.
        const seamMat = this.mat(new THREE.MeshStandardMaterial({ color: '#dde5ee', roughness: 1 }))
        for(const x of [8, 24, 40, 56])
        {
            this.box(0.08, 12, 0.06, seamMat, x, 6, -4.44)
        }

        // Skylight pools, one per vignette.
        for(const x of VIGNETTE_X)
        {
            this.skylightPool(x, 2.6)
        }
    }

    setLights()
    {
        // Cool hemispheric ambient — broad, low-contrast fill. Intensities are
        // tuned so the pale surfaces sit near their albedo instead of clipping
        // to white (there is no tone mapping to absorb overexposure).
        this.hemi = new THREE.HemisphereLight('#f4f7fb', '#d8e0ea', 0.65)
        this.scene.add(this.hemi)

        // One dominant soft overhead source (slightly warm-neutral), high-radius
        // soft shadows. It follows the active vignette so one shadow camera can
        // stay tight across a 64-unit gallery.
        this.key = new THREE.DirectionalLight('#fff8ee', 0.9)
        this.key.position.set(0, 9, 2.5)
        this.key.target.position.set(0, 0, 0)
        this.key.castShadow = true
        this.key.shadow.mapSize.set(1024, 1024)
        this.key.shadow.radius = 8
        this.key.shadow.bias = -0.0005
        this.key.shadow.camera.left = -8
        this.key.shadow.camera.right = 8
        this.key.shadow.camera.top = 8
        this.key.shadow.camera.bottom = -8
        this.key.shadow.camera.far = 20
        this.scene.add(this.key)
        this.scene.add(this.key.target)
    }

    /** beat 01 — single matte-black floorstander on brass feet, set right. */
    setVignette01()
    {
        const x = VIGNETTE_X[0] + 1.5

        const column = this.box(0.36, 1.18, 0.44, this.matteBlack, x, 0.65, 0)
        this.brassFeet(x, 0, 0.36, 0.44)

        // Drivers on the front face.
        this.cylinder(0.09, 0.09, 0.02, this.blackDetail, x, 1.02, 0.23).rotation.x = Math.PI / 2
        this.cylinder(0.12, 0.12, 0.02, this.blackDetail, x, 0.66, 0.23).rotation.x = Math.PI / 2
        this.cylinder(0.12, 0.12, 0.02, this.blackDetail, x, 0.36, 0.23).rotation.x = Math.PI / 2

        this.reflect(column)
    }

    /** beat 02 (signature) — source, amplifier, speaker becoming one system. */
    setVignette02()
    {
        const cx = VIGNETTE_X[1]

        // Source (low, wide), amplifier (with brass knobs), speaker column —
        // three separated forms standing directly in the gallery, per the CSV.
        const source = this.box(0.7, 0.16, 0.42, this.matteBlack, cx - 1.4, 0.08, 0)
        this.cylinder(0.05, 0.05, 0.01, this.brass, cx - 1.4, 0.165, 0.1)

        const amp = this.box(0.62, 0.24, 0.46, this.matteBlack, cx, 0.12, 0)
        const knobL = this.cylinder(0.035, 0.035, 0.03, this.brass, cx - 0.16, 0.14, 0.24)
        knobL.rotation.x = Math.PI / 2
        const knobR = this.cylinder(0.035, 0.035, 0.03, this.brass, cx + 0.16, 0.14, 0.24)
        knobR.rotation.x = Math.PI / 2

        const speaker = this.box(0.34, 1.1, 0.42, this.matteBlack, cx + 1.4, 0.61, 0)
        this.brassFeet(cx + 1.4, 0, 0.34, 0.42)
        this.cylinder(0.1, 0.1, 0.02, this.blackDetail, cx + 1.4, 0.9, 0.22).rotation.x = Math.PI / 2
        this.cylinder(0.12, 0.12, 0.02, this.blackDetail, cx + 1.4, 0.5, 0.22).rotation.x = Math.PI / 2

        this.reflect(source)
        this.reflect(amp)
        this.reflect(speaker)

        // The scripted gold signal path — THIS BEAT ONLY. A glint travels the
        // brass edges source → amp → speaker while a thin axis line resolves on
        // the floor. Opacity is driven per-frame from the beat-02 local progress.
        this.glintPath = [
            new THREE.Vector3(cx - 1.4, 0.18, 0.12),
            new THREE.Vector3(cx - 0.16, 0.15, 0.26),
            new THREE.Vector3(cx + 0.16, 0.15, 0.26),
            new THREE.Vector3(cx + 1.4, 0.62, 0.24)
        ]
        this.glint = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.035, 16, 16)), this.gold)
        this.glint.castShadow = false
        this.scene.add(this.glint)

        this.goldAxisMat = this.mat(new THREE.MeshBasicMaterial({
            color: this.colors.accent, transparent: true, opacity: 0
        }))
        this.goldAxis = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(2.8, 0.02)), this.goldAxisMat)
        this.goldAxis.rotation.x = -Math.PI / 2
        this.goldAxis.position.set(cx, 0.012, 0.3)
        this.scene.add(this.goldAxis)
    }

    /** beat 03 — four plinths receding diagonally, one silhouette each. */
    setVignette03()
    {
        const cx = VIGNETTE_X[2]
        const spots = [
            [cx - 1.8, 0.9], [cx - 0.6, 0.3], [cx + 0.6, -0.3], [cx + 1.8, -0.9]
        ]

        for(const [x, z] of spots)
        {
            this.box(0.7, 0.5, 0.7, this.plinth, x, 0.25, z)
        }

        // Turntable: plinth box + platter + brass spindle.
        const [tx, tz] = spots[0]
        this.box(0.5, 0.08, 0.4, this.matteBlack, tx, 0.54, tz)
        this.cylinder(0.16, 0.16, 0.03, this.blackDetail, tx, 0.6, tz)
        this.cylinder(0.008, 0.008, 0.05, this.brass, tx, 0.63, tz)

        // Integrated amplifier face.
        const [ax, az] = spots[1]
        this.box(0.5, 0.18, 0.4, this.matteBlack, ax, 0.59, az)
        this.cylinder(0.03, 0.03, 0.03, this.brass, ax + 0.12, 0.6, az + 0.21).rotation.x = Math.PI / 2

        // Speaker column (standing on the floor beside its plinth line).
        const [sx, sz] = spots[2]
        this.box(0.28, 0.9, 0.34, this.matteBlack, sx, 0.45 + 0.5, sz)
        this.brassFeet(sx, sz, 0.28, 0.34)

        // Compact digital source.
        const [dx, dz] = spots[3]
        this.box(0.34, 0.1, 0.3, this.matteBlack, dx, 0.55, dz)
        this.cylinder(0.02, 0.02, 0.015, this.brass, dx + 0.1, 0.56, dz + 0.16).rotation.x = Math.PI / 2
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

        // Black component mid-audition.
        this.box(0.56, 0.18, 0.4, this.matteBlack, cx - 0.4, 0.84, 0)
        this.cylinder(0.03, 0.03, 0.025, this.brass, cx - 0.24, 0.86, 0.21).rotation.x = Math.PI / 2

        // White cotton gloves, set down beside it.
        const gloveA = this.box(0.16, 0.02, 0.08, this.glove, cx + 0.25, 0.765, 0.12)
        gloveA.rotation.y = 0.4
        const gloveB = this.box(0.16, 0.02, 0.08, this.glove, cx + 0.38, 0.765, -0.02)
        gloveB.rotation.y = -0.25

        // Small brass alignment weight.
        this.cylinder(0.045, 0.055, 0.07, this.brass, cx + 0.75, 0.79, 0.1)

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

    /** beat 07 — the listening position: two speakers, low chair, gold catch. */
    setVignette07()
    {
        const cx = VIGNETTE_X[4]

        for(const ox of [-2.2, 2.2])
        {
            const speaker = this.box(0.36, 1.18, 0.44, this.matteBlack, cx + ox, 0.65, -0.6)
            this.brassFeet(cx + ox, -0.6, 0.36, 0.44)
            this.cylinder(0.09, 0.09, 0.02, this.blackDetail, cx + ox, 1.02, -0.37).rotation.x = Math.PI / 2
            this.cylinder(0.12, 0.12, 0.02, this.blackDetail, cx + ox, 0.5, -0.37).rotation.x = Math.PI / 2
            this.reflect(speaker)
        }

        // Single low chair facing the pair, at the foreground edge but kept
        // small and low so the central negative space stays clear for the CTA.
        const chair = new THREE.Group()
        chair.position.set(cx, 0, 3.4)
        chair.rotation.y = Math.PI
        this.scene.add(chair)
        this.box(0.44, 0.05, 0.42, this.matteBlack, 0, 0.3, 0, chair)
        this.box(0.44, 0.3, 0.05, this.matteBlack, 0, 0.47, -0.19, chair)
        for(const [ox, oz] of [[-0.18, -0.17], [0.18, -0.17], [-0.18, 0.17], [0.18, 0.17]])
        {
            this.box(0.035, 0.3, 0.035, this.matteBlack, ox, 0.15, oz, chair)
        }

        // Modest gold floor catch at the exact listening spot — THIS BEAT ONLY.
        // Placed just ahead of the chair so it reads from the camera position
        // behind the listener.
        this.goldCatchMat = this.mat(new THREE.MeshBasicMaterial({
            color: this.colors.accent, transparent: true, opacity: 0, depthWrite: false
        }))
        this.goldCatch = new THREE.Mesh(this.geo(new THREE.CircleGeometry(0.4, 40)), this.goldCatchMat)
        this.goldCatch.rotation.x = -Math.PI / 2
        this.goldCatch.position.set(cx, 0.014, 2.6)
        this.scene.add(this.goldCatch)
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

        const a = cam.a, s = cam.s
        if(t <= cam.settle)
        {
            const k = this.ramp(t, 0, cam.settle)
            this.camPos.set(...a.pos).lerp(new THREE.Vector3(...s.pos), k)
            this.camTgt.set(...a.tgt).lerp(new THREE.Vector3(...s.tgt), k)
        }
        else if(t <= cam.depart || i === this.beatCams.length - 1)
        {
            this.camPos.set(...s.pos)
            this.camTgt.set(...s.tgt)
        }
        else
        {
            const next = this.beatCams[i + 1]
            const k = this.ramp(t, cam.depart, 1)
            this.camPos.set(...s.pos).lerp(new THREE.Vector3(...next.a.pos), k)
            this.camTgt.set(...s.tgt).lerp(new THREE.Vector3(...next.a.tgt), k)
        }

        const rig = this.experience.camera.modes.default.instance
        rig.position.copy(this.camPos)
        rig.lookAt(this.camTgt)

        // Key light + shadow camera track the gallery position so soft shadows
        // stay crisp near the framed vignette.
        this.key.position.set(this.camTgt.x, 9, 2.5)
        this.key.target.position.set(this.camTgt.x, 0, 0)

        return { beatIndex: i, localT: t }
    }

    updateGoldAccents(beatIndex, t)
    {
        // Beat 02: glint traces the signal path, axis line resolves, then both
        // fade back to edge catches only (per transition_out).
        let glintOpacity = 0
        let axisOpacity = 0
        if(beatIndex === 1)
        {
            const inRamp = this.ramp(t, 0.12, 0.22)
            const outRamp = 1 - this.ramp(t, 0.82, 0.96)
            glintOpacity = inRamp * outRamp
            axisOpacity = this.ramp(t, 0.5, 0.75) * outRamp * 0.85

            const path = this.glintPath
            const travel = this.ramp(t, 0.15, 0.72) * (path.length - 1)
            const seg = Math.min(path.length - 2, Math.floor(travel))
            this.glint.position.lerpVectors(path[seg], path[seg + 1], travel - seg)
        }
        this.gold.opacity = glintOpacity
        this.goldAxisMat.opacity = axisOpacity

        // Beat 07: modest floor catch at the listening point, arriving with the
        // settled frame and holding.
        this.goldCatchMat.opacity = (beatIndex === 4)
            ? this.ramp(t, 0.25, 0.5) * 0.35
            : 0
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
