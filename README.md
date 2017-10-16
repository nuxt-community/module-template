# Module Template for Nuxt.js

> Simple Starter template for Nuxt.js Modules

If you need to transpile your module (For example backward node compatibility for async/await) see [module-template-rollup](https://github.com/nuxt-community/module-template-rollup).

## Features
- ESLint
- Ready tests using [Jest](https://facebook.github.io/jest)
- Code coverage
- Circle CI
- Standard Version

## Create a Nuxt Module

This is a template for [vue-cli](https://github.com/vuejs/vue-cli).
Make sure to use a version of vue-cli >= 2.1 (vue -V) is installed.
If you don't already have it, just install it.

```bash
vue init nuxt-community/module-template <module-name>
cd <module-name>
yarn install # or npm install
```

Then, just head to [Modules Guide](https://nuxtjs.org/guide/modules) for more help and don't forget to submit a PR in [awesome-nuxt](https://github.com/nuxt-community/awesome-nuxt) when your module was ready ;)

## Development
For easier development you can use [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) or [npm link](https://docs.npmjs.com/cli/link)
to link to your project. Then start build using `npm run dev`. To version & publish module:

```bash
npm run release
```

## Licenses

- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)