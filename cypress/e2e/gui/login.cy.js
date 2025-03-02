describe('login', () => {
  it('successfully', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('be.visible')
    cy.get("h2").should("contain", "Welcome to GitLab")
  })
})