import { configureReact as configure } from '@bn-digital/vite'
import { sha256 } from 'crypto-hash'

import packageJson from './package.json'

const name = packageJson.name.split('/')[0].replace('@', '')

const env: <T>(key: keyof typeof process.env, defaultValue?: T) => string | T | null = (key, defaultValue) => process.env?.[key] ?? defaultValue ?? null

export default configure(
  { appType: 'spa' },
  {
    react: { graphql: true },
    analytics: {},
    sourceMaps: env('NODE_ENV') !== 'production',
    fonts: {
      google: {
        preconnect: true,
        families: [
          { name: 'Roboto', styles: 'wght@400;500;600;700;900' },
          { name: 'Lato', styles: 'wght@400;500;600;700;900' },
        ],
        display: 'auto',
      },
    },
    pwa: {
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      selfDestroying: true,
      includeManifestIcons: true,
      mode: env('NODE_ENV') !== 'production' ? 'development' : 'production',
      base: '/',
      workbox: {
        cacheId: env('GITHUB_SHA', name),
        sourcemap: env('NODE_ENV') !== 'production',
        cleanupOutdatedCaches: true,
        ignoreURLParametersMatching: [/(admin|api|graphql|)/],
        disableDevLogs: env('NODE_ENV') === 'production',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'images-cache' },
          },
        ],
      },
      manifest: {
        name,
        short_name: name,
        id: '/',
        icons: [
          { src: 'icon.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        theme_color: '#ffffff',
        categories: ['Web Application'],
      },
      devOptions: {
        enabled: env('NODE_ENV') !== 'production',
      },
    },
  },
)
