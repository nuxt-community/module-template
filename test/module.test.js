import { setupTest } from '@nuxtjs/module-test-utils'

describe('module', () => {
  // eslint-disable-next-line
  const ctx = setupTest({
    __dirname,
    fixture: '../example',
    config: {
      myModule: {
        test: 123
      }
    }
  })

  test('should inject plugin', () => {
    expect(ctx).toNuxtPluginAdded({
      src: expect.stringContaining('templates/plugin.js'),
      fileName: 'myPlugin.js',
      options: ctx.config.myModule
    })
  })
})
