// Distinctive Audio — shared site scripts
// Loaded in the footer of every page. Each block guards its own targets so it
// is a safe no-op on pages that don't contain the relevant elements.

(function () {
  "use strict";

  // Page loader (homepage only — it's the sole page with the markup): the
  // page stays behind a full-screen overlay until every REVEAL-CRITICAL
  // asset has arrived — the eager images, the webfonts, the window 'load'
  // event, and (when the immersive experience runs) the WebGL scene's
  // opening-frame assets. loading="lazy" images are deliberately NOT
  // awaited: they fetch on scroll (or never, when hidden under the
  // experience layout — the poster) and must not hold the page hostage.
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
    const images = Array.from(document.images).filter(
      (img) => img.loading !== "lazy"
    );
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

    // `let` — the reduced-motion path decorates this with the meter update.
    let render = () => {
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

    // ── Analogue VU meter: a sprung needle chasing real progress, and a
    // percentage readout. The needle runs an underdamped spring (a real
    // meter movement overshoots a touch and settles); the number is a
    // critically-damped follower so it never counts backwards. Byte-level
    // progress from the hero model download (experience:progress) makes the
    // sweep continuous rather than stepping between files. ──
    const percentEl = loader.querySelector("[data-page-loader-percent]");
    const needleEl = loader.querySelector("[data-page-loader-needle]");
    const needleAngle = (p) => -52 + 104 * Math.max(0, Math.min(p, 1.015));
    if (percentEl && needleEl && !reduceMotion) {
      let pos = 0;
      let vel = 0;
      let num = 0;
      let lastT = 0;
      const K = 46;   // spring stiffness
      const DAMP = 9; // < critical — a touch of analogue wobble
      const meterTick = (t) => {
        if (!document.body.contains(loader)) return; // removed post-reveal
        const dt = Math.min((t - (lastT || t)) / 1000, 0.05);
        lastT = t;
        const target = Math.min(1, done() / total());
        vel += (target - pos) * K * dt;
        vel *= Math.exp(-DAMP * dt);
        pos += vel * dt;
        // Chase faster once everything is in, so "100" lands during the
        // full-bar beat before the slide-out.
        num += (target - num) * Math.min(1, (target >= 1 ? 14 : 5) * dt);
        percentEl.textContent = Math.round(num * 100);
        needleEl.style.transform = "rotate(" + needleAngle(pos) + "deg)";
        requestAnimationFrame(meterTick);
      };
      requestAnimationFrame(meterTick);
    } else if (percentEl && needleEl) {
      // Reduced motion: direct readout, no spring — updated via render().
      const meterDirect = () => {
        const target = Math.min(1, done() / total());
        percentEl.textContent = Math.round(target * 100);
        needleEl.style.transform = "rotate(" + needleAngle(target) + "deg)";
      };
      const baseRender = render;
      render = () => {
        baseRender();
        meterDirect();
      };
    }

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
      // Download progress tops out at 92%: the remaining slice belongs to
      // decode + scene build, so the meter never reads "100" while the
      // page is visibly still working — experience:ready delivers the peg.
      const ratio = Math.min(1, (event.detail && event.detail.ratio) || 0);
      xpRatio = Math.max(xpRatio, ratio * 0.92);
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

  // External body-text links open in a new tab; internal links navigate in the
  // same tab. CKEditor rich-text body content is always rendered inside a
  // `.prose-body` container; site chrome (nav, CTAs, breadcrumb, related-category
  // pills) lives outside it and is left untouched. "External" = resolves to a
  // different origin than the current page. Skips in-page anchors and
  // non-navigational protocols (mailto:/tel:), which the URL parse also rejects.
  document.querySelectorAll(".prose-body a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") {
      return;
    }
    let isExternal = false;
    try {
      isExternal = new URL(href, window.location.href).origin !== window.location.origin;
    } catch (e) {
      return; // mailto:, tel:, and other non-http(s) URLs — leave as-is.
    }
    if (!isExternal) {
      return;
    }
    link.setAttribute("target", "_blank");
    const rel = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
    if (!rel.includes("noopener")) rel.push("noopener");
    if (!rel.includes("noreferrer")) rel.push("noreferrer");
    link.setAttribute("rel", rel.join(" "));
  });

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

  // Scroll-reveal: elements tagged data-reveal settle in once as they enter the
  // viewport (states in src/input.css). Siblings inside a data-reveal-group
  // stagger 90ms apart, capped at 360ms so long grids never feel like a
  // slideshow. The reveal-ready gate keeps everything visible without JS, and
  // reduced-motion users get instant content via the CSS media query.
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");

    const groupCounts = new Map();
    revealEls.forEach((el) => {
      const group = el.closest("[data-reveal-group]");
      if (!group) return;
      const i = groupCounts.get(group) || 0;
      el.style.setProperty("--reveal-delay", Math.min(i * 90, 360) + "ms");
      groupCounts.set(group, i + 1);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // Scroll-activated sticky header: hide on scroll down, reveal on scroll up.
  // Toggles scroll-down / scroll-up on <body>; the #site-header transform and
  // drop-shadow states live in src/input.css.
  //
  // Direction changes only count after DELTA px of accumulated movement, and
  // positions are clamped to the real scroll range — otherwise trackpad
  // momentum jitter and the macOS rubber-band bounce (top/bottom overscroll)
  // read as a reversal and pop the header back in mid-scroll.
  const body = document.body;
  let lastScroll = 0;
  const DELTA = 16;
  // Homepage (hero-overlay nav): keep the header on screen while the pinned
  // cinematic hero is on screen. The .da-hero section (200dvh) pins a sticky
  // 100dvh layer, so the page content only starts moving up at
  // heroHeight − viewportHeight — hide-on-scroll-down takes over from exactly
  // that depth. Inner pages hide immediately (0). Recomputed on resize since
  // both terms track the viewport.
  const heroSection = document.getElementById("main-nav")
    ? document.querySelector(".da-hero")
    : null;
  let hideAfter = 0;
  const computeHideAfter = () => {
    hideAfter = heroSection
      ? Math.max(heroSection.offsetHeight - window.innerHeight, 0)
      : 0;
  };
  computeHideAfter();
  window.addEventListener("resize", computeHideAfter);

  window.addEventListener("scroll", () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = Math.min(
      Math.max(window.pageYOffset, 0),
      Math.max(maxScroll, 0)
    );

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      body.classList.remove("scroll-down");
      lastScroll = 0;
      return;
    }

    const delta = currentScroll - lastScroll;
    if (Math.abs(delta) < DELTA) {
      return; // sub-threshold jiggle: keep lastScroll so slow scrolls accumulate
    }

    if (
      delta > 0 &&
      currentScroll > hideAfter &&
      !body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (delta < 0 && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
})();
