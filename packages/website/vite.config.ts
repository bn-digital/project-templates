import { configureReact } from '@bn-digital/vite'
import { defineConfig, loadEnv } from 'vite'

const defaultConfig = configureReact(
  {},
  {
    lint: { enabled: true },
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
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv('', process.cwd(), ['APP_', 'WEBSITE_', 'VITE_', 'REACT_APP_'])
  console.log(env)
  return {
    ...defaultConfig,
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
