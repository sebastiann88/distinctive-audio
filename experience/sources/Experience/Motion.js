import Experience from './Experience.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin once, at module load, before any ScrollTrigger is created.
gsap.registerPlugin(ScrollTrigger)

/**
 * Motion — the choreography layer for the Distinctive Audio homepage.
 *
 * GSAP owns animation VALUES; the Experience's render loop owns drawing. Motion
 * tweens the shared `sceneState.scrollProgress` (and DOM elements); World reads
 * that state each frame. One render loop, never two.
 *
 * The beat table maps five frame beats onto contiguous progress ranges
 * (95/145/95/90/90 of 515vh). This extends the template's single scrollProgress
 * tween into one scrubbed tween PER FRAME BEAT, each bound to its section
 * (`[data-beat]`) — so the dom-only sections between them (address band,
 * services, quick-links) hold the scene still exactly as the CSV specifies
 * ("No camera move; continue prior alignment").
 *
 * DOM choreography follows each row's dom_choreography column: copy pins via
 * CSS sticky inside the tall beat sections; reveals are scrubbed timelines
 * positioned in the settled portion of each beat. Content is authored VISIBLE —
 * every tween here is a `.from()`, so with reduced motion (or no JS) the page
 * reads complete.
 */
export default class Motion
{
    constructor()
    {
        this.experience = new Experience()
        this.targetElement = this.experience.targetElement
        this.sceneState = this.experience.sceneState
        this.sceneConfig = this.experience.sceneConfig
        this.resources = this.experience.resources

        this.beats = this.sceneConfig.beats ?? []

        // Web fonts shift trigger boundaries; recalc once they resolve.
        if(document.fonts?.ready)
        {
            document.fonts.ready.then(() => ScrollTrigger.refresh())
        }

        // The page's capability gate already keeps this module off phones,
        // tablets and reduced-motion visitors; the matchMedia guard here only
        // needs to catch a preference change made mid-session. The two
        // conditions are complementary so ONE always matches — matchMedia only
        // runs the callback when at least one condition is true.
        this.mm = gsap.matchMedia()

        this.mm.add(
            {
                standard: '(prefers-reduced-motion: no-preference)',
                reduceMotion: '(prefers-reduced-motion: reduce)'
            },
            (context) =>
            {
                const { reduceMotion } = context.conditions

                if(reduceMotion)
                {
                    // Calm path: hold the opening frame; the page reads as a
                    // complete static document (all copy authored visible).
                    this.sceneState.scrollProgress = 0
                    return
                }

                this.setBeatScrub()
                this.setFrameBeatReveals()
                this.setDomOnlyReveals()
            }
        )
    }

    /**
     * One scrubbed tween per frame beat, on the shared sceneState value.
     * Each beat section is (span + 100)vh tall with a sticky full-viewport
     * stage inside; 'top top' → 'bottom bottom' is the pinned range.
     *
     * The scrub END, however, extends past the pin to wherever the NEXT
     * section begins (capped at +50vh): the beat sections overlap with
     * negative margins, and without the extension the entire 16-unit
     * room-to-room camera dolly crammed into the last few vh of the pin and
     * then FROZE through the structural gap — transitions read as a lurch
     * then a dead hold. With it, the dolly rides the whole gap.
     *
     * World needs to know how much each span was stretched so settle/hold
     * timings stay anchored to the PIN (text is read against a still camera,
     * exactly as before): sceneState.beatScales[i] = pinSpan / extendedSpan,
     * kept fresh by onRefresh.
     */
    setBeatScrub()
    {
        const scales = this.sceneState.beatScales = []

        this.beats.forEach((beat, i) =>
        {
            const section = document.querySelector(`[data-beat="${beat.id}"]`)
            if(!section)
                return

            const endPos = () =>
            {
                const pinEnd = section.offsetTop + section.offsetHeight - window.innerHeight
                const nextTop = section.nextElementSibling?.offsetTop ?? pinEnd
                const cap = pinEnd + window.innerHeight * 0.5
                return Math.round(Math.min(Math.max(nextTop, pinEnd), cap))
            }

            // The LAST beat's scrub starts 30vh BEFORE its pin: the sections
            // before it are opaque bands, so the approach dolly plays while
            // the band is still lifting off the canvas — the speakers glide
            // in beneath it and the room is already composed when the section
            // pins. No bare-gallery beat on arrival.
            const isLast = i === this.beats.length - 1

            gsap.fromTo(this.sceneState,
                { scrollProgress: beat.from },
                {
                    scrollProgress: beat.to,
                    ease: 'none',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: section,
                        start: isLast ? 'top 70%' : 'top top',
                        end: endPos,
                        scrub: 0.8,
                        onRefresh: (self) =>
                        {
                            const pin = section.offsetHeight - window.innerHeight
                            scales[i] = Math.min(1, pin / Math.max(self.end - self.start, 1))
                        }
                    }
                }
            )
        })
    }

    /**
     * Scrubbed DOM reveals inside each frame beat, positioned so body text is
     * read while the camera is settled (per the beat table's dom_choreography).
     * Timelines are 1 unit long; tween positions are fractions of the beat.
     */
    setFrameBeatReveals()
    {
        const reveal = (beatId, steps, departAt = 0.9) =>
        {
            const section = document.querySelector(`[data-beat="${beatId}"]`)
            if(!section)
                return

            const tl = gsap.timeline({
                defaults: { ease: 'power2.out' },
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.8
                }
            })

            for(const step of steps)
            {
                const targets = section.querySelectorAll(step.sel)
                if(!targets.length)
                    continue
                tl.from(targets, {
                    autoAlpha: 0,
                    y: step.y ?? 28,
                    x: step.x ?? 0,
                    stagger: step.stagger ?? 0,
                    duration: step.duration ?? 0.12
                }, step.at)
            }

            // Ease the pinned copy away as the beat departs, so text never
            // rides the camera move into the next room.
            tl.to(section.querySelectorAll('[data-stage-content]'), {
                autoAlpha: 0,
                y: -20,
                duration: 0.1
            }, departAt)

            // Pin the timeline's length to exactly 1 so tween positions are
            // true fractions of the beat even when departAt ends before 1.
            tl.set({}, {}, 1)
        }

        // frame-index-01: hero copy — CTAs included — is visible from the first
        // paint and enters once on load (no scroll-scrubbed reveal; the buttons
        // must be actionable immediately). Copy sits on the LEFT (speaker
        // right), so it slides in from the left.
        gsap.from('[data-reveal="hero-copy"]', {
            autoAlpha: 0, x: -24, duration: 0.9, ease: 'power2.out', delay: 0.15
        })
        // Depart fade only (no scrubbed entrances): the card and the scroll
        // arrow leave at 0.5 — before the camera starts its (now longer,
        // gentler) dolly toward room 2 at 0.62 — so the speaker gets the whole
        // second half of the beat to transition out on its own.
        reveal('frame-index-01', [], 0.5)

        // frame-index-02 (signature): heading + paragraph pin upper-left; the
        // three service ideas stagger into the viewport centre as the camera
        // settles (0.55) and the gold axis line resolves beneath the trio.
        // Earlier positions than the CSV because the section's scroll span was
        // shortened — the full set must be readable well before the depart fade.
        reveal('frame-index-02', [
            { sel: '[data-reveal="approach-heading"]', at: 0.05, duration: 0.1 },
            { sel: '[data-reveal="approach-card"]', at: 0.26, stagger: 0.08, duration: 0.1 }
        ])

        // frame-index-03: category links occupy negative space in sequence.
        reveal('frame-index-03', [
            { sel: '[data-reveal="categories-heading"]', at: 0.05, duration: 0.1 },
            { sel: '[data-reveal="category"]', at: 0.22, stagger: 0.1, duration: 0.1 },
            { sel: '[data-reveal="categories-cta"]', at: 0.66, duration: 0.08 }
        ])

        // frame-index-04: biography floats in the open wall area; the read-more
        // link appears after the tabletop objects settle (camera settles ~0.25).
        reveal('frame-index-04', [
            { sel: '[data-reveal="founder-heading"]', at: 0.08, duration: 0.1 },
            { sel: '[data-reveal="founder-copy"]', at: 0.24, stagger: 0.08, duration: 0.1 },
            { sel: '[data-reveal="founder-cta"]', at: 0.6, duration: 0.08 }
        ])

        // frame-index-07: the speakers glide in and settle first (camera
        // settle at 0.22); ONLY THEN does the closing heading drop down from
        // above (negative y), the booking CTA following the same way.
        reveal('frame-index-07', [
            { sel: '[data-reveal="closing-heading"]', at: 0.3, y: -36, duration: 0.12 },
            { sel: '[data-reveal="closing-cta"]', at: 0.5, y: -24, duration: 0.1 }
        ])
    }

    /**
     * dom-only rows (05 address band, 06 services, 08 quick-links): ordinary
     * entrance motion over open space — play once, no scrub, no scene change.
     */
    setDomOnlyReveals()
    {
        for(const section of document.querySelectorAll('[data-dom-beat]'))
        {
            const items = section.querySelectorAll('[data-reveal-item]')
            if(!items.length)
                continue

            gsap.from(items, {
                autoAlpha: 0,
                y: 32,
                duration: 0.7,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 78%',
                    toggleActions: 'play none none none'
                }
            })
        }
    }

    /**
     * Recalculate ScrollTrigger positions. Call after a layout change that moves
     * trigger boundaries — new content, web-fonts finishing, etc. (Viewport
     * resize is auto-handled by ScrollTrigger, debounced.)
     */
    refresh()
    {
        ScrollTrigger.refresh()
    }

    destroy()
    {
        // Reverts every tween + ScrollTrigger created inside matchMedia.
        this.mm?.revert()
    }
}
