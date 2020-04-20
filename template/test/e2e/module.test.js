import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import test from 'ava'

// Init Nuxt.js and create a server listening on localhost:4000
// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '../../example')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'universal' // Isomorphic application
  const nuxt = new Nuxt(config)
  t.context.nuxt = nuxt // We keep a reference to Nuxt so we can close the server at the end of the test
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
})

test('Route / exists and render HTML', async (t) => {
  const { nuxt } = t.context
  const { html } = await nuxt.renderRoute('/', {})
  t.true(html.includes('Works!'))
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server', (t) => {
  const { nuxt } = t.context
  nuxt.close()
})
