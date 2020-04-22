import { Nuxt } from 'nuxt-edge'
import { spyOnClass } from './jest'

export async function loadNuxt (ctx) {
  ctx.nuxt = new Nuxt(ctx.config || {})

  const { moduleContainer } = ctx.nuxt
  spyOnClass(moduleContainer)

  await ctx.nuxt.ready()
}
