import { defineConfig } from 'cypress'
import { config } from 'dotenv'

const dotenvConfig = config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = dotenvConfig.parsed ?? {}
      return config
    },
  },
})
