import { resolve } from 'path'
import defu from 'defu'

export async function loadConfig (ctx, path) {
  ctx.rootDir = resolve(ctx.__dirname, path)
  const loadedConfig = await import(resolve(ctx.rootDir, 'nuxt.config.js'))
    .then(m => m.default || m)
  ctx.config = defu(ctx.config, loadedConfig)
  if (!ctx.config.rootDir) {
    ctx.config.rootDir = ctx.rootDir
  }
}
