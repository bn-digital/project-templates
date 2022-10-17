declare global {
  namespace Cypress {
    interface Chainable {
      test(): Chainable<unknown>
    }
  }
}
