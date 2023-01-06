# Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![Build Badge](https://github.com/FaZeRs/portfolio-client/workflows/Build/badge.svg)
![Tests Badge](https://github.com/FaZeRs/portfolio-client/workflows/Tests/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=FaZeRs_portfolio-client&metric=alert_status)](https://sonarcloud.io/dashboard?id=FaZeRs_portfolio-client)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=FaZeRs_portfolio-client&metric=coverage)](https://sonarcloud.io/dashboard?id=FaZeRs_portfolio-client)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=FaZeRs_portfolio-client&metric=code_smells)](https://sonarcloud.io/dashboard?id=FaZeRs_portfolio-client)

| Repository                                                          | Info               |
|---------------------------------------------------------------------|--------------------|
| [portfolio-client](https://github.com/FaZeRs/portfolio-client)      | Frontend           |
| [portfolio-api](https://github.com/FaZeRs/portfolio-api)            | Rest API           |
| [portfolio-server](https://github.com/FaZeRs/portfolio-server)      | Docker Environment |

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

## Usage

### Development

Create a `.env` file from the template `.env.template` file.
```bash
cp .env.template .env
```

Run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Docker Production Build

First, build the portfolio image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t portfolio-client:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 portfolio-client:latest
```
