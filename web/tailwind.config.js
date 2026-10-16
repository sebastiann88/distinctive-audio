/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan every source that can contain class names:
  //  - legacy static pages in this docroot (removed page-by-page as each is
  //    ported to Twig — see Task 4),
  //  - Craft Twig templates at the project root (one level up from web/),
  //  - the shared JS (script.js toggles classes at runtime, e.g.
  //    shadow-[…], h-20/h-24, shadow-md/sm — they must survive purge).
  // The HTML + Twig union keeps the site fully styled throughout the
  // migration; once the .html files are gone the Twig glob carries it.
  content: ["./*.html", "../templates/**/*.twig", "./js/**/*.js"],
  // Classes that may not be statically discoverable in the sources above.
  safelist: [
    // Scroll-state classes swapped by js/script.js. The js glob already
    // catches them, but pin them here so they survive if the script is ever
    // minified, bundled, or moved outside the content globs.
    "h-20",
    "h-24",
    "shadow-sm",
    "shadow-md",
    // NOTE: there are currently no DB-driven Tailwind utilities — product
    // condition uses the custom .da-status-pill component and brands carry no
    // derived classes. When the product-card Twig (Tasks 8/10) interpolates
    // utilities from entry data (e.g. an accent per category/condition), add
    // those exact families here, e.g.:
    //   { pattern: /^(bg|text|border)-(accent-gold|accent-teal|primary|secondary)$/ },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003B6FF2",
        "on-primary": "#ffffff",
        "primary-container": "#003B6FF2",
        "on-primary-container": "#B4D2EB",
        "primary-fixed": "#cce5ff",
        "primary-fixed-dim": "#9ecbf3",
        "on-primary-fixed": "#001e31",
        "on-primary-fixed-variant": "#174a6c",
        secondary: "#7d5700",
        "on-secondary": "#ffffff",
        "secondary-container": "#fec96f",
        "on-secondary-container": "#775300",
        "secondary-fixed": "#ffdeaa",
        "secondary-fixed-dim": "#f1be65",
        "on-secondary-fixed": "#271900",
        "on-secondary-fixed-variant": "#5f4100",
        tertiary: "#332100",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#4f3500",
        "on-tertiary-container": "#d89700",
        "tertiary-fixed": "#ffdeac",
        "tertiary-fixed-dim": "#ffba36",
        "on-tertiary-fixed": "#281900",
        "on-tertiary-fixed-variant": "#5f4100",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        background: "#f8f9ff",
        "on-background": "#0b1c30",
        surface: "#f8f9ff",
        "on-surface": "#0b1c30",
        "surface-variant": "#d3e3ff",
        "on-surface-variant": "#41474e",
        "surface-dim": "#cbdbf6",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e6eeff",
        "surface-container-high": "#dde9ff",
        "surface-container-highest": "#d3e3ff",
        "surface-tint": "#346285",
        "inverse-surface": "#213146",
        "inverse-on-surface": "#ebf1ff",
        "inverse-primary": "#9ecbf3",
        outline: "#72787e",
        "outline-variant": "#c1c7ce",
        "accent-gold": "#f0aa10",
        "accent-teal": "#003B6FF2",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "container-max": "1280px",
        gutter: "24px",
        "margin-mobile": "20px",
        "margin-desktop": "80px",
        unit: "8px",
        "stack-sm": "0.5rem",
        "stack-md": "1.5rem",
        "stack-lg": "4rem",
      },
      boxShadow: {
        ambient: "0px 4px 20px rgba(11, 28, 48, 0.05)",
      },
      fontFamily: {
        "headline-lg": ["Newsreader", "serif"],
        "headline-lg-mobile": ["Newsreader", "serif"],
        "headline-md": ["Newsreader", "serif"],
        "display-lg": ["Newsreader", "serif"],
        "title-lg": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "display-lg-mobile": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-lg": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "label-md": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
