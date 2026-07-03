/**
 * Assembles the deployable site into _site/ (what Vercel serves):
 *
 *   _site/
 *   ├── index.html              ← the IMMERSIVE homepage (experience/site/index.html,
 *   │                             asset paths rewritten ../dist/ → experience/dist/)
 *   ├── about.html, products.html, …   ← the classic pages (experience/site/*.html), links intact
 *   ├── css/ images/ js/        ← the classic site's static assets
 *   └── experience/dist/        ← the built Three.js/GSAP bundles + poster
 *
 * The immersive page's relative links (about.html, products.html, …) resolve
 * against the site root, so every page of the classic site is reachable from it.
 *
 * Run via `npm run build:site` (locally or as Vercel's buildCommand).
 * Prerequisite: `npm install` at the root AND in experience/ (Vercel's
 * installCommand handles both).
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(root, '_site')
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' })

// 1. Fresh output dir
fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(out)

// 2. Rebuild the classic site's CSS from source (keeps css/style.css honest)
run('npx tailwindcss -i ./src/input.css -o ./css/style.css --minify', root)

// 3. Build the experience (WebGL bundle + its Tailwind UI layer)
const exp = path.join(root, 'experience')
run('npm run build', exp)
run('npm run build:css', exp)

// 4. Copy the classic site's pages from experience/site/ (they live beside the
//    immersive index so the dev server can serve the whole site; index.html is
//    handled separately in step 6, and site/brand + site/partials are reference
//    material, not pages). They land at the _site root, where their relative
//    css/ js/ images/ references resolve.
const sitePages = path.join(exp, 'site')
for(const file of fs.readdirSync(sitePages))
{
    if(file.endsWith('.html') && file !== 'index.html')
    {
        fs.copyFileSync(path.join(sitePages, file), path.join(out, file))
    }
}
for(const dir of ['css', 'images', 'js'])
{
    fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true })
}

// 5. Copy the built experience bundles (+ poster in dist/assets)
fs.cpSync(path.join(exp, 'dist'), path.join(out, 'experience', 'dist'), { recursive: true })

// 6. The immersive page becomes the homepage; its assets live one level down
//    from the site root instead of one level up from site/, so rewrite.
const home = fs.readFileSync(path.join(exp, 'site', 'index.html'), 'utf8')
    .replaceAll('../dist/', 'experience/dist/')
fs.writeFileSync(path.join(out, 'index.html'), home)

console.log('\n_site/ assembled:')
console.log('  pages:', fs.readdirSync(out).filter(f => f.endsWith('.html')).length)
console.log('  experience bundle:', fs.existsSync(path.join(out, 'experience/dist/experience.js')) ? 'ok' : 'MISSING')
