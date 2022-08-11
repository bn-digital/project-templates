describe('Homepage', () => {
  it('opened', () => {
    cy.visit('/')
    cy.get('#root').should('exist')
  })
})