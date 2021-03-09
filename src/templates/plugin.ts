import type { Plugin } from '@nuxt/types'

console.log('imported')

export default <Plugin> /* async */ function (ctx, inject) {
  // Fully typed plugin
  console.log('loaded', ctx && 'with context', !!inject && 'and with inject')
}
