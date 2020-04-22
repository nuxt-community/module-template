import { resolve } from 'path'
import defu from 'defu'

export default /* async */ function (moduleOptions) {
  const options = defu(this.options.myModule, moduleOptions, DEFAULTS)

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'myPlugin.js',
    options
  })
}

const DEFAULTS = {}
