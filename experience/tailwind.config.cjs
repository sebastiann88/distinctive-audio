/** @type {import('tailwindcss').Config} */
// Tailwind CSS v3 config. IMPORTANT: this template targets v3, not v4.
// `npm install tailwindcss` now installs v4 (a different, CSS-first setup with
// no config file). Install v3 explicitly:  npm install -D tailwindcss@3 postcss autoprefixer
//
// theme.extend holds the Distinctive Audio BRAND TOKENS — the canonical values
// from brand-system.md (the style authority; it wins every divergence flagged
// by the brand audit). Spec token names, not the old site config's MD3
// expansion set. On a CMS port, only the `content` globs change.
module.exports = {
  content: [
    // ONLY the immersive page and its partials. The classic site's pages also
    // live in site/ (so the dev server can serve the whole site) but they use
    // the root build (css/style.css, tailwind.config.js) — a site/**/*.html
    // glob would bloat dist/site.css with their classes. site/brand/ is
    // REFERENCE, not output — don't scan it either.
    './site/index.html',
    './site/partials/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003d5e',
        'primary-container': '#005581',
        'on-primary-container': '#8ec9fb',
        secondary: '#7d5700',
        'secondary-container': '#ffba2f',
        surface: '#f8f9ff',
        'on-surface': '#0b1c30',
        outline: '#71787f',
        'outline-variant': '#c1c7d0',
        accent: {
          DEFAULT: '#f0aa10', // exactly ONE word per display heading; primary CTA
          hover: '#d8980e',
        },
        ground: '#f4f7fb',      // page background
        'body-text': '#005581', // default body text
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Newsreader', 'serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      maxWidth: { prose: '65ch' },
    },
  },
  plugins: [],
}
