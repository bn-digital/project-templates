import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.DOMAIN ?? 'http://localhost:8080'
      return config
    },
  },
})
