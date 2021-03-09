import defu from 'defu'
import { extname } from 'upath'

import { Module, NuxtOptions } from '@nuxt/types'

import { name, version } from '../package.json'

export interface ModuleOptions {}
const DEFAULTS: ModuleOptions = {}
const CONFIG_KEY = 'myModule'

const nuxtModule: Module<ModuleOptions> = /* async */ function (moduleOptions) {
  const options = defu(this.options[CONFIG_KEY] /* istanbul ignore next */ || {}, moduleOptions, DEFAULTS)

  const nuxtOptions: NuxtOptions = this.nuxt.options
  console.log('Normalized & typed Nuxt options available, e.g.', { rootDir: nuxtOptions.rootDir })

  const src = require.resolve('./templates/plugin')
  this.addPlugin({
    src,
    fileName: 'myPlugin' + extname(src),
    options
  })
}

;(nuxtModule as any).meta = { name, version }

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: Partial<ModuleOptions> } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: Partial<ModuleOptions> } // Nuxt 2.9 - 2.13
}

export default nuxtModule
