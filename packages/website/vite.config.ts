import configure from '@bn-digital/vite'
import { proxy } from './package.json'

export default configure(
  {
    server: {
      port: 80,
      proxy: {
        '^/(admin|graphql|api|content-manager|content-type-builder|email|sitemap|graphs-builder|i18n|config-sync|secrets|upload|uploads|users-permissions|_health)(.*)':
          {
            target: proxy,
            changeOrigin: false,
          },
      },
    },
  },
  {
    fonts: {
      google: {
        families: [{ name: 'Roboto', styles: 'wght@400;500;600;700;900' }],
        display: 'block',
      },
    },
  },
)
