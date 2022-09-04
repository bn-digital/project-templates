import { configureReact as configure } from '@bn-digital/vite'

import packageJson from './package.json'

const name = packageJson.name.split('/')[0].replace('@', '')

const env: (key: keyof typeof process.env) => string | null = key => process.env?.[key] ?? null

export default configure(
  {},
  {
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
      mode: env('NODE_ENV') !== 'production' ? 'development' : 'production',
      base: '/',
      workbox: {
        additionalManifestEntries: ['/graphql', '/'],
        cacheId: name,
        sourcemap: env('NODE_ENV') !== 'production',
        cleanupOutdatedCaches: true,
        disableDevLogs: env('NODE_ENV') === 'production',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'images-cache' },
          },
        ],
      },
      includeManifestIcons: true,
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
