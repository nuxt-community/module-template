import { setupTest } from './utils'

describe('module', () => {
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
