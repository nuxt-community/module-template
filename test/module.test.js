import { expectModuleToBeCalledWith, getNuxt, setupTest } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    config: {
      myModule: {
        test: 123
      }
    }
  })

  test('should inject plugin', () => {
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/templates[\\/]plugin/),
      fileName: expect.stringContaining('myPlugin'),
      options: getNuxt().options.myModule
    })
  })
})
