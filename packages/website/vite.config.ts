import { configureReact as configure } from '@bn-digital/vite'

import packageJson from './package.json'

const name = packageJson.name.split('/')[0].replace('@', '')

type NodeEnv = 'development' | 'production' | 'test'

const env: <T>(key: keyof typeof process.env, defaultValue?: T) => string | T | null = (key, defaultValue) => process.env?.[key] ?? defaultValue ?? null

export default configure(
  {
    json: { stringify: true },
    appType: 'spa',
    base: `/`,
    define: {
      'process.env': {
        NODE_ENV: JSON.stringify(env<NodeEnv>('NODE_ENV', 'development')),
        APP_ENV: env('APP_ENV') ?? env('NODE_ENV') ?? 'development',
        APP_NAME: name,
        APP_VERSION: (env('APP_VERSION') ?? packageJson.version ?? Date.now()) as string,
      },
    },
    worker: { format: 'es' },
  },
  {
    lint: { enabled: true },
    react: { graphql: true },
    analytics: { enableDev: false },
    sourceMaps: env('NODE_ENV') !== 'production',
    fonts: {
      google: {
        preconnect: true,
        families: [{ name: 'Lato', styles: 'wght@400;500;600;700;800;900' }],
        display: 'auto',
      },
    },
    pwa: {
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      includeManifestIcons: true,
      mode: env<NodeEnv>('NODE_ENV') !== 'production' ? 'development' : 'production',
      workbox: {
        cacheId: env('GITHUB_SHA', name),
        sourcemap: env<NodeEnv>('NODE_ENV') !== 'production',
        cleanupOutdatedCaches: true,
        mode: env<NodeEnv>('NODE_ENV') === 'production' ? 'production' : 'development',
        ignoreURLParametersMatching: [/\/admin$/, /\/graphql/, /\/upload$/, /\/api/],
        disableDevLogs: env<NodeEnv>('NODE_ENV') === 'production',
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
        scope: '/',
        icons: [
          { src: 'icon.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
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
