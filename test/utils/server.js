import getPort from 'get-port'

export async function listen (ctx) {
  const port = await getPort()
  ctx.url = 'http://localhost:' + port
  await ctx.nuxt.listen(port)
}

export function url (ctx, path) {
  return ctx.url + path
}
