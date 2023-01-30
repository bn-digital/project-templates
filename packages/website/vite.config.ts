import { configureReact as configure } from '@bn-digital/vite'

export default configure(
  {},
  {
    lint: { enabled: false },
    react: { graphql: true },
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
