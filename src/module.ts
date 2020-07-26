import { resolve } from 'path'
import defu from 'defu'

import { Module } from '@nuxt/types'

type NuxtModuleOptions = Record<string, any>

const nuxtModule: Module<NuxtModuleOptions> = /* async */ function(
  moduleOptions
) {
  const options = defu<NuxtModuleOptions>(
    this.options.myModule,
    moduleOptions,
    DEFAULTS
  )

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'myPlugin.js',
    options
  })
}

const DEFAULTS = {}

export default nuxtModule

declare module '@nuxt/types' {
  // Nuxt 2.14+
  interface NuxtConfig {
    myModule: NuxtModuleOptions
  }
  // Nuxt 2.9 - 2.13
  interface Configuration {
    myModule: NuxtModuleOptions
  }
}
