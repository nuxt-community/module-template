import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('module', () => {
  // eslint-disable-next-line
  const ctx = setupTest({
    __dirname,
    browser: true,
    fixture: '../example'
  })

  test('browser', async () => {
    const page = await createPage('/')
    const html = await page.getHtml()
    expect(html).toContain('Works!')
  })
})
