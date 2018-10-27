# {{ name }}

[![David-DM][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> {{ description }}

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `{{ name }}` dependency using yarn or npm to your project
- Add `{{ name }}` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '{{ name }}',

    // With options
    ['{{ name }}', { /* module options */ }],
 ]
}
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) {{ author }}

<!-- Badges -->
[david-dm-src]: https://david-dm.org/{{ github }}/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/{{ github }}
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://img.shields.io/circleci/project/github/{{ github }}.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/{{ github }}
[codecov-src]: https://img.shields.io/codecov/c/github/{{ github }}.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/{{ github }}
[npm-version-src]: https://img.shields.io/npm/dt/{{ name }}.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/{{ name }}
[npm-downloads-src]: https://img.shields.io/npm/v/{{ name }}/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/{{ name }}
