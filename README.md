## ↪️ Deprecated: Please migrate to new [Starter Template](https://github.com/nuxt/starter/tree/module) using [Module Builder](https://github.com/nuxt/module-builder)

----

# Using this template

1. Clone this repo locally
   ```bash
   npx degit https://github.com/nuxt-community/module-template.git my-new-project
   cd my-new-project
   yarn # or npm install
   ```
2. Search and replace all templated names:
   * `npm_package` => the name of your chosen npm package - e.g. `@nuxtjs/http`
   * `myModule` => a camel-cased version of your npm package for namespacing your module options - e.g. `http`
   * `github_repo` => your GitHub repo - e.g. `nuxt-community/http-module`

3. Remove this section of the `README.md` and dive in!

---

# npm_package

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `npm_package` dependency to your project

```bash
yarn add npm_package # or npm install npm_package
```

2. Add `npm_package` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'npm_package',
  ],
  myModule: {
    // module options
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/npm_package/latest.svg
[npm-version-href]: https://npmjs.com/package/npm_package

[npm-downloads-src]: https://img.shields.io/npm/dm/npm_package.svg
[npm-downloads-href]: https://npmjs.com/package/npm_package

[github-actions-ci-src]: https://github.com/github_repo/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/github_repo/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/github_repo.svg
[codecov-href]: https://codecov.io/gh/github_repo

[license-src]: https://img.shields.io/npm/l/npm_package.svg
[license-href]: https://npmjs.com/package/npm_package
