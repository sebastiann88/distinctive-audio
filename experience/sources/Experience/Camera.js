import * as THREE from 'three'
import Experience from './Experience.js'

/**
 * Dual-mode camera from the template: a `default` instance driven by the World
 * (scroll) and — under the #debug hash only — a `debug` instance with
 * OrbitControls for inspecting the scene.
 *
 * Production never constructs the debug rig: OrbitControls arrives with the
 * dynamically imported debug tooling (see index.js), so its code, its pointer
 * listeners on the full-viewport mount, and its per-frame damping update all
 * stay out of the visitor's bundle and render loop.
 */
export default class Camera
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.targetElement = this.experience.targetElement
        this.scene = this.experience.scene

        this.setInstance()
        this.setModes()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(25, this.config.width / this.config.height, 0.1, 150)
        this.instance.rotation.reorder('YXZ')

        this.scene.add(this.instance)
    }

    setModes()
    {
        this.modes = {}

        // Default — the World-driven rig (World writes position + lookAt).
        this.modes.default = { instance: this.instance.clone() }
        this.modes.default.instance.rotation.reorder('YXZ')

        // Debug — only when the tooling was dynamically imported (#debug hash).
        const OrbitControls = this.experience.debugTools?.OrbitControls
        if(this.config.debug && OrbitControls)
        {
            this.modes.debug = { instance: this.instance.clone() }
            this.modes.debug.instance.rotation.reorder('YXZ')
            this.modes.debug.instance.position.set(5, 5, 5)

            this.modes.debug.orbitControls = new OrbitControls(this.modes.debug.instance, this.targetElement)
            this.modes.debug.orbitControls.screenSpacePanning = true
            this.modes.debug.orbitControls.zoomSpeed = 0.25
            this.modes.debug.orbitControls.enableDamping = true
            this.modes.debug.orbitControls.update()
        }

        this.mode = this.modes.debug ? 'debug' : 'default'
    }

    resize()
    {
        const aspect = this.config.width / this.config.height

        this.instance.aspect = aspect
        this.instance.updateProjectionMatrix()

        for(const mode of Object.values(this.modes))
        {
            mode.instance.aspect = aspect
            mode.instance.updateProjectionMatrix()
        }
    }

    update()
    {
        // Damping means the debug camera keeps moving between pointer events.
        this.modes.debug?.orbitControls.update()

        // Apply coordinates
        this.instance.position.copy(this.modes[this.mode].instance.position)
        this.instance.quaternion.copy(this.modes[this.mode].instance.quaternion)
        this.instance.updateMatrixWorld() // To be used in projection
    }

    destroy()
    {
        this.modes.debug?.orbitControls.dispose()
    }
}
