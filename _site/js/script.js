// Distinctive Audio — shared site scripts
// Loaded in the footer of every page. Each block guards its own targets so it
// is a safe no-op on pages that don't contain the relevant elements.

(function () {
  "use strict";

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
