import { setupTest, createPage } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    browser: true,
    fixture: '../example'
  })

  test('browser', async () => {
    const page = await createPage('/')
    const html = await page.content()

    expect(html).toContain('Works!')
  })
})
