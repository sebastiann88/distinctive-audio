import EventEmitter from './EventEmitter.js'

/**
 * Debounced window-resize relay. Resizing the WebGL drawing buffer
 * (renderer.setSize) is expensive, and a window drag fires resize dozens of
 * times a second — so wait for the drag to settle. The canvas is CSS-sized
 * (100% of the mount), so it stretches during the drag and snaps crisp on the
 * trailing edge, the same way ScrollTrigger debounces its own refresh.
 */
export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        this.onResize = () =>
        {
            window.clearTimeout(this.debounce)
            this.debounce = window.setTimeout(() => this.trigger('resize'), 150)
        }
        window.addEventListener('resize', this.onResize)
    }

    destroy()
    {
        window.clearTimeout(this.debounce)
        window.removeEventListener('resize', this.onResize)
        this.off('resize')
    }
}
