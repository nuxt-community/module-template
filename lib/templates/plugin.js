function sampleFunction () {
  return ''
}

export default async function ({ router, store }, inject) {
  inject('sampleFunction', sampleFunction)
  // Now accessible via this.$sampleFunction in components and
  // ctx.$sampleFunction in plugins, middleware, etc.
}
