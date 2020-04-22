import { Builder } from 'nuxt-edge'

export async function build (ctx) {
  ctx.builder = new Builder(ctx.nuxt)
  await ctx.builder.build()
}
