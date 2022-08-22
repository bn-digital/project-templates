import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl =
        process.env.APP_ENV === 'staging' && process.env.APP_NAME
          ? `https://${process.env.APP_NAME}.bndigital.dev`
          : process.env.DOMAIN
          ? `https://${process.env.DOMAIN}`
          : 'http://localhost:8080'
      return config
    },
  },
})
