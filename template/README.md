# {{ name }}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
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
[npm-version-src]: https://img.shields.io/npm/v/{{ name }}/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/{{ name }}

[npm-downloads-src]: https://img.shields.io/npm/dt/{{ name }}.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/{{ name }}

[circle-ci-src]: https://img.shields.io/circleci/project/github/{{ github }}.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/{{ github }}

[codecov-src]: https://img.shields.io/codecov/c/github/{{ github }}.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/{{ github }}

[license-src]: https://img.shields.io/npm/l/{{ name }}.svg?style=flat-square
[license-href]: https://npmjs.com/package/{{ name }}
