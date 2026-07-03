import glsl from 'vite-plugin-glsl'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Bruno's original builds a standalone SPA (index.html at the root). Here the
 * HTML lives in hand-authored static files under site/ (and later, optionally, a
 * CMS), so we build a LIBRARY-style bundle: one JS entry + its CSS, emitted with
 * predictable names that any static page or template can reference.
 *
 * This builds ONLY the island (the WebGL experience). The page's Tailwind v3 CSS
 * is built separately by the Tailwind CLI (npm run build:css). Keeping the two
 * builds separate is deliberate — see references/tailwind-and-brand-reference.md.
 *
 * `base` must match where the built assets are served from (default /dist/). If
 * you deploy to a subpath or CDN, update `base` and the page <link>/<script>
 * hrefs together.
 *
 * DEV vs BUILD: `npm run dev` serves the whole experience/ folder and opens
 * site/index.html. The page's production references to ../dist/* are rewritten
 * on the fly to the live sources — /sources/index.js gets HMR (and pulls in the
 * island CSS via its import), and site.css is compiled by Vite's PostCSS
 * pipeline (Tailwind) per request, so no separate watcher is needed. The
 * production HTML on disk never changes.
 */

/** Dev-only: point the served HTML at live sources instead of built dist/. */
function devIslandRewrite()
{
    return {
        name: 'dev-island-rewrite',
        apply: 'serve',
        transformIndexHtml(html)
        {
            return html
                // The island bundle -> the real entry module (HMR).
                .replace('../dist/experience.js', '/sources/index.js')
                // Tailwind page CSS -> compiled on the fly by Vite/PostCSS.
                .replace('../dist/site.css', '/site/src/site.css')
                // Island CSS -> the source stylesheet. Must stay a <link> (not
                // just the JS import) so the loader is styled from first paint,
                // before any module loads — that gap is what the loader covers.
                .replace('../dist/experience.css', '/sources/style.css')
        }
    }
}

/**
 * Dev-only: the classic site's pages live in site/ alongside the immersive
 * index, but their assets (css/ js/ images/) stay at the REPO root — outside
 * this dev server's root — because that is where the deployed _site/ puts them
 * (pages at the root, assets beside them; see build-site.mjs). Their relative
 * references resolve to /site/css/… etc. in dev, so map those URL prefixes back
 * to the repo-root folders.
 */
function classicAssets()
{
    const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
    const mime = {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.avif': 'image/avif',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2'
    }

    return {
        name: 'classic-assets',
        apply: 'serve',
        configureServer(server)
        {
            server.middlewares.use((req, res, next) =>
            {
                const match = req.url.match(/^\/site\/(css|js|images)\/([^?]+)/)
                if(!match)
                    return next()

                const dir = path.join(repoRoot, match[1])
                const file = path.join(dir, decodeURIComponent(match[2]))
                // No escaping the mapped folder (e.g. via ../).
                if(!file.startsWith(dir + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile())
                    return next()

                res.setHeader('Content-Type', mime[path.extname(file).toLowerCase()] ?? 'application/octet-stream')
                fs.createReadStream(file).pipe(res)
            })
        }
    }
}

export default defineConfig(({ command }) =>
{
    const serving = command === 'serve'

    return {
        // Dev serves the whole folder (so /site/, /sources/ and /dist/assets/
        // are all reachable); build keeps sources/ as root for the library bundle.
        root: serving ? '.' : 'sources',
        publicDir: serving ? 'public' : '../public',
        appType: 'mpa',
        // Relative base: emitted asset URLs resolve from wherever dist/ is served,
        // so the site works at any subpath (e.g. GitHub project pages).
        base: './',
        server: {
            open: '/site/index.html'
        },
        build: {
            outDir: '../dist',
            // dist/ is SHARED with the Tailwind CLI output (dist/site.css). Never
            // empty it from here or `npm run build` silently deletes the UI layer.
            emptyOutDir: false,
            sourcemap: true,
            rollupOptions: {
                input: 'sources/index.js',
                output: {
                    entryFileNames: 'experience.js',
                    assetFileNames: 'experience.[ext]'
                }
            }
        },
        plugins: [glsl(), devIslandRewrite(), classicAssets()]
    }
})
