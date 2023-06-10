<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Frammer-Nuxt
- Package name: frammerNuxt
- Description:  Frammer-Nuxt is used to integrate any web app in Nuxt Devtools.
-->

# Frammer-Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Frammer-Nuxt integrated with the [Nuxt Devtools](https://github.com/nuxt/devtools).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- ⛰ &nbsp;Insert any web app into iframe
- 🌲 &nbsp;That's it

## Quick Setup

1. Add `frammerNuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D frammer-nuxt

# Using npm
npm install --save-dev frammer-nuxt
```

2. Add `frammerNuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["frammer-nuxt"],
  frammerNuxt: {
    iframeUrl: "http://localhost:3333",
  },
});
```

That's it! You can now use Frammer-Nuxt module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with playground, with devtools client ui
npm run dev

# Develop with playground, with bundled client ui
npm run play:prod

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/frammer-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/frammer-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/frammer-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/frammer-nuxt
[license-src]: https://img.shields.io/npm/l/frammer-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/frammer-nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
