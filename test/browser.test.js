import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('module', () => {
  const ctx = setupTest({
    __dirname,
    browser: true,
    fixture: '../example'
  })

  test('browser', async () => {
    const page = await createPage(ctx, '/')
    const html = await page.getHtml()
    expect(html).toContain('Works!')
  })
})
