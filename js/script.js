// Distinctive Audio — shared site scripts
// Loaded in the footer of every page. Each block guards its own targets so it
// is a safe no-op on pages that don't contain the relevant elements.

(function () {
  "use strict";

  // Page loader (homepage only — it's the sole page with the markup): the
  // page stays behind a full-screen overlay until EVERY asset has arrived —
  // all images (none are lazy), the webfonts, the window 'load' event, and
  // (when the immersive experience runs) the WebGL scene's models.
  // A thin progress line reflects real load progress; when complete the
  // overlay slides off to the right and scrolling unlocks.
  const loader = document.querySelector("[data-page-loader]");
  if (loader) {
    const root = document.documentElement;
    const bar = loader.querySelector("[data-page-loader-progress]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Lock scroll while loading (class is JS-managed so no-JS visitors are
    // never trapped; the <noscript> style beside the markup hides the loader).
    root.classList.add("is-loading");

    // ── progress model: images (1 unit each) + fonts (1) + window load (1)
    // + the WebGL experience (4 units, homepage only — its models are the
    // heaviest thing on the site). ──
    const images = Array.from(document.images);
    const XP_UNITS = 4;
    const experienceOn = () => root.classList.contains("experience-on");
    let imagesDone = 0;
    let fontsDone = 0;
    let windowLoaded = 0;
    let xpRatio = 0;
    let xpReady = false;
    let finished = false;

    const total = () =>
      images.length + 2 + (experienceOn() ? XP_UNITS : 0);
    const done = () =>
      imagesDone + fontsDone + windowLoaded + (experienceOn() ? xpRatio * XP_UNITS : 0);

    const render = () => {
      if (bar) bar.style.transform = "scaleX(" + Math.min(1, done() / total()) + ")";
    };

    const complete = () => {
      if (finished) return;
      if (!(windowLoaded && fontsDone && imagesDone >= images.length)) return;
      if (experienceOn() && !xpReady) return;
      finished = true;

      if (bar) bar.style.transform = "scaleX(1)";

      const reveal = () => {
        // The immersive homepage choreographs the scene from scroll 0 —
        // start the story at the top, like the reference site does.
        // ('instant' bypasses the page's CSS smooth scrolling.)
        if (experienceOn()) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        root.classList.remove("is-loading");
        loader.classList.add("page-loader--done");
        // Tell listeners (the WebGL island refreshes ScrollTrigger: removing
        // the scroll lock changes the scrollbar, which moves trigger points).
        window.dispatchEvent(new CustomEvent("page:revealed"));
        window.setTimeout(() => loader.remove(), reduceMotion ? 0 : 900);
      };

      // Let the full bar paint for a beat before the slide-out.
      window.setTimeout(reveal, reduceMotion ? 0 : 400);
    };

    const settle = () => {
      imagesDone++;
      render();
      complete();
    };
    images.forEach((img) => {
      if (img.complete) {
        settle();
      } else {
        img.addEventListener("load", settle, { once: true });
        img.addEventListener("error", settle, { once: true });
      }
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsDone = 1;
        render();
        complete();
      });
    } else {
      fontsDone = 1;
    }

    const onWindowLoad = () => {
      windowLoaded = 1;
      render();
      complete();
    };
    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    // The WebGL island (homepage, capable desktops only) reports its own
    // asset pipeline. If it never boots (WebGL failure drops the page back
    // to the static layout) `experienceOn()` turns false and the gates open.
    window.addEventListener("experience:progress", (event) => {
      xpRatio = Math.max(xpRatio, Math.min(1, event.detail && event.detail.ratio || 0));
      render();
    });
    window.addEventListener("experience:ready", () => {
      xpRatio = 1;
      xpReady = true;
      render();
      complete();
    });

    // Safety valve: a single hung request must not brick the whole site.
    window.setTimeout(() => {
      imagesDone = images.length;
      fontsDone = 1;
      windowLoaded = 1;
      xpReady = true;
      xpRatio = 1;
      complete();
    }, 15000);

    render();
  }

  // Accordion: when one <details> opens, close the others.
  const details = document.querySelectorAll("details");
  if (details.length) {
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }

  // Header shrink on scroll (pages with an h-24 nav, e.g. all-in-one systems).
  const shrinkNav = document.querySelector("nav .h-24")
    ? document.querySelector("nav")
    : null;
  if (shrinkNav) {
    window.addEventListener("scroll", () => {
      const shadow = "shadow-[0px_4px_20px_rgba(11,28,48,0.05)]";
      if (window.scrollY > 50) {
        shrinkNav.classList.add(shadow);
        shrinkNav.querySelector(".h-24")?.classList.replace("h-24", "h-20");
      } else {
        shrinkNav.classList.remove(shadow);
        shrinkNav.querySelector(".h-20")?.classList.replace("h-20", "h-24");
      }
    });
  }

  // Nav shadow on scroll (pages whose nav carries an id hook).
  const scrollNav =
    document.getElementById("mainNav") || document.getElementById("main-nav");
  if (scrollNav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        scrollNav.classList.add("shadow-md");
        scrollNav.classList.remove("shadow-sm");
      } else {
        scrollNav.classList.add("shadow-sm");
        scrollNav.classList.remove("shadow-md");
      }
    });
  }
})();
