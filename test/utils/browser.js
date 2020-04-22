import { createBrowser as _createBrowser } from 'tib'
import { url } from './server'

export async function createBrowser (ctx) {
  ctx.browser = await _createBrowser('puppeteer')
}

export async function createPage (ctx, path) {
  const page = await ctx.browser.page(url(ctx, path))
  return page
}
