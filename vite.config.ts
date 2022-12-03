import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'
import sentryVitePlugin from '@sentry/vite-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      Vue({
        reactivityTransform: true,
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml', 'safari-pinned-tab.svg'],
        manifest: {
          name: env.VITE_APP_TITLE,
          short_name: env.VITE_SHORT_NAME,
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:3333/__inspect/ to see the inspector
      Inspect(),

      // https://github.com/getsentry/sentry-javascript-bundler-plugins/tree/main/packages/vite-plugin
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,

        // Specify the directory containing build artifacts
        include: './dist',

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and needs the `project:releases` and `org:read` scopes
        authToken: env.SENTRY_AUTH_TOKEN,

        telemetry: false,
        dryRun: !env.SENTRY_ORG || !env.SENTRY_PROJECT || !env.SENTRY_AUTH_TOKEN,
      }),
    ],

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      dirStyle: 'nested',
      onFinished() {
        generateSitemap({
          hostname: env.VITE_BASE_URL,
        })
      },
    },

    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        'vee-validate',
        'yup',
        'vue-easy-lightbox',
      ],
      exclude: [
        'vue-demi',
      ],
    },

    ssr: {
      // TODO: workaround until they support native ESM
      noExternal: ['workbox-window'],
    },

    define: {
      APP_VERSION: JSON.stringify(env.npm_package_version),
      PACKAGE_NAME: JSON.stringify(env.npm_package_name),
    },
  }
})
