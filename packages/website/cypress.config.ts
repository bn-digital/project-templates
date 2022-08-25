import { defineConfig } from 'cypress'
import { config } from 'dotenv'

const dotenvConfig = config()

const resolveBaseUrl = () =>
  process.env.APP_ENV !== 'staging'
    ? 'http://localhost:8080'
    : process.env.DOMAIN
    ? `https://${process.env.DOMAIN}`
    : `https://${process.env.APP_NAME}.bndigital.dev`

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = resolveBaseUrl()
      config.env = dotenvConfig.parsed ?? {}
      return config
    },
  },
})
