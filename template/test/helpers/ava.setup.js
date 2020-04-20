const hooks = require('require-extension-hooks')

if (process.env.TEST === 'unit') {
  require('jsdom-global')()
  require('browser-env')
  const Vue = require('vue')
  Vue.config.productionTip = false
  // https://github.com/nuxt/create-nuxt-app/issues/180#issuecomment-463069941
  window.Date = global.Date = Date
  // https://github.com/video-dev/hls.js/issues/2231#issuecomment-486102552
  window.Number = Number
}

if (process.env.TEST === 'e2e') {
  const Vue = require('vue')
  Vue.config.productionTip = false
}

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue')
  .plugin('vue')
  .push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push()
