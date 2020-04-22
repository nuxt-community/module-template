import defu from 'defu'

export function createCtx (opts) {
  return defu(opts, {
    __dirname,
    server: opts.browser,
    build: opts.browser || opts.server,
    config: {}
  })
}

export async function cleanup (ctx) {
  if (ctx.nuxt) {
    await ctx.nuxt.close()
  }
  if (ctx.browser) {
    await ctx.browser.close()
  }
}
