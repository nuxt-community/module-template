# {{ name }}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> {{ description }}

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `{{ name }}` dependency to your project

```bash
yarn add {{ name }} # or npm install {{ name }}
```

2. Add `{{ name }}` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '{{ name }}',

    // With options
    ['{{ name }}', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) {{ author }}

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/{{ name }}/latest.svg
[npm-version-href]: https://npmjs.com/package/{{ name }}

[npm-downloads-src]: https://img.shields.io/npm/dt/{{ name }}.svg
[npm-downloads-href]: https://npmjs.com/package/{{ name }}

[github-actions-ci-src]: https://github.com/{{ github }}/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/{{ github }}/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/{{ github }}.svg
[codecov-href]: https://codecov.io/gh/{{ github }}

[license-src]: https://img.shields.io/npm/l/{{ name }}.svg
[license-href]: https://npmjs.com/package/{{ name }}
