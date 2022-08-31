import { configureReact as configure } from '@bn-digital/vite'

import packageJson from './package.json'

const name = packageJson.name.split('/')[0].replace('@', '')

const isDevelopment: () => boolean = () => process.env.NODE_ENV !== ('production' as const)

export default configure(
  { server: { cors: true } },
  {
    sourceMaps: isDevelopment(),
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
      mode: isDevelopment() ? 'development' : 'production',
      base: '/',
      workbox: {
        cacheId: name,
        sourcemap: isDevelopment(),
        cleanupOutdatedCaches: true,
        disableDevLogs: !isDevelopment(),
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.url.endsWith(`graphql`),
            handler: 'NetworkFirst',
            options: { cacheName: 'api-cache' },
          },
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
        background_color: '#262523',
      },
      devOptions: {
        enabled: isDevelopment(),
      },
    },
  },
)
