/**
 * Repeatable GLB optimization pass: assets-src/models/ → public/assets/models/.
 *
 *   node scripts/optimize-models.mjs
 *
 * What it does, in order, and why:
 *   dedup/prune     — drop duplicate + unused data from the DCC export
 *   weld            — index the geometry (required for smooth normals and for
 *                     Draco to bite; the exports ship unindexed triangle soup)
 *   normals         — the source meshes have NO normal attribute at all, which
 *                     forces flat shading in GLTFLoader; generate smooth ones
 *   material fix    — the exports omit metallicFactor, which the glTF spec
 *                     defaults to 1.0 (fully metallic → renders near-black).
 *                     Clamp to the gallery's matte register: metallic 0,
 *                     roughness 0.9. The baked color map stays.
 *   textureCompress — embedded 1024² PNGs (~1 MB each) → WebP q80, still 1024².
 *                     WebP over KTX2 for v1: GLTFLoader reads EXT_texture_webp
 *                     natively, so no KTX2Loader/transcoder wiring or toktx
 *                     binary is needed, and it already clears the size budget.
 *   draco           — geometry compression; decoder is self-hosted in
 *                     public/draco/ (see Utils/Loader.js)
 */
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { dedup, prune, weld, normals, textureCompress, draco } from '@gltf-transform/functions'
import draco3d from 'draco3dgltf'
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'assets-src', 'models')
const outDir = path.join(root, 'public', 'assets', 'models')

const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
        'draco3d.encoder': await draco3d.createEncoderModule(),
        'draco3d.decoder': await draco3d.createDecoderModule()
    })

fs.mkdirSync(outDir, { recursive: true })

for(const file of fs.readdirSync(srcDir).filter((f) => f.endsWith('.glb')).sort())
{
    const srcPath = path.join(srcDir, file)
    const outPath = path.join(outDir, file)
    const before = fs.statSync(srcPath).size

    const document = await io.read(srcPath)

    await document.transform(
        dedup(),
        weld(),
        normals({ overwrite: true }),
        prune()
    )

    for(const material of document.getRoot().listMaterials())
    {
        material.setMetallicFactor(0)
        material.setRoughnessFactor(0.9)
    }

    await document.transform(
        textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80, resize: [1024, 1024] }),
        draco()
    )

    await io.write(outPath, document)

    const after = fs.statSync(outPath).size
    console.log(
        `${file}: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB` +
        ` (${Math.round((1 - after / before) * 100)}% smaller)`
    )
}
