import { resolve } from 'path'
import defu from 'defu'
import { Module } from '@nuxt/types'

export interface ModuleOptions {}
const DEFAULTS: ModuleOptions = {}
const CONFIG_KEY = 'myModule'

const nuxtModule: Module<ModuleOptions> = /* async */ function (moduleOptions) {
  const options = defu<ModuleOptions>(this.options[CONFIG_KEY], moduleOptions, DEFAULTS)
  // const { nuxt } = this

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'myPlugin.js',
    options
  })
}

;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
