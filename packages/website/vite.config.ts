import { configureReact as configure } from '@bn-digital/vite'

export default configure(
  {},
  {
    sourceMaps: process.env.NODE_ENV !== 'production',
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
  },
)
