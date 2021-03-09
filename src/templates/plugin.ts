import type { Plugin } from '@nuxt/types'

console.log('imported')

export default <Plugin> async function ({ app, store }, inject) {
  // Fully typed plugin
  console.log('loaded')
}
