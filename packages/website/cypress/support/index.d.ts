declare global {
  import { rmdirSync, readdirSync } from 'fs'
  namespace Cypress {
    interface Chainable {
      readdirSync: ReturnType<typeof readdirSync>
      rmdirSync: ReturnType<typeof rmdirSync>
    }
  }
}
