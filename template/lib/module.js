const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...{},
    ...moduleOptions,
    ...this.options['{{ name }}']
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '{{ name }}.js',
    options
  })
}

module.exports.meta = require('../package.json')
