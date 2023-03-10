import { configureReact } from '@bn-digital/vite'

export default configureReact(
  {},
  {
    lint: { enabled: true },
    graphql: { enabled: true },
    analytics: { enableDev: false },
    fonts: {
      google: {
        preconnect: true,
        families: [{ name: 'Lato', styles: 'wght@400;500;600;700;800;900' }],
        display: 'auto',
      },
    },
  }
)
