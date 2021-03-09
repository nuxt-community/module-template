import { join } from 'path'

import { watch } from 'chokidar'
import { mkdist } from 'mkdist'

export default {
  modules: [
    '../src/module.ts'
  ],
  hooks: {
    async 'modules:before' () {
      if (process.env.NODE_ENV === 'test') {
        return
      }
      // This is for developing templated files
      // and ensures we get live-reloading in our Nuxt example
      // whilst editing TypeScript sources.
      const path = join(__dirname, '../src/templates')
      async function compileTemplates () {
        await mkdist({
          srcDir: path,
          distDir: join(__dirname, '../dist/templates')
        })
      }
      await compileTemplates()
      const watcher = watch(join(path, '*'))
      watcher.on('all', compileTemplates)
    }
  }
}
