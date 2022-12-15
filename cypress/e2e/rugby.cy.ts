describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('Click Menu', () => {
    cy.get('[ng-reflect-router-link-active="link-Activate"]').click()
  })

})
