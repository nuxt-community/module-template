import { createCtx, cleanup } from './ctx'
import { loadConfig } from './config'
import { loadNuxt } from './nuxt'
import { build } from './build'
import { listen } from './server'
import { createBrowser } from './browser'

export function setupTest (opts) {
  const ctx = createCtx(opts)

  beforeAll(async () => {
    if (ctx.fixture) {
      await loadConfig(ctx, ctx.fixture)
    }

    await loadNuxt(ctx)

    if (ctx.build) {
      await build(ctx)
    }

    if (ctx.server) {
      await listen(ctx)
    }

    if (ctx.browser) {
      await createBrowser(ctx)
    }
  }, ctx.buildTimeout || 60000)

  afterAll(async () => {
    await cleanup(ctx)
  })

  return ctx
}

export function spyOnClass (instance) {
  const proto = Object.getPrototypeOf(instance)
  for (const key of Object.getOwnPropertyNames(proto)) {
    jest.spyOn(instance, key)
  }
}

function toNuxtPluginAdded (ctx, plugin) {
  expect(ctx.nuxt.moduleContainer.addPlugin).toBeCalledWith(plugin)
  return { pass: true }
}

expect.extend({
  toNuxtPluginAdded
})
