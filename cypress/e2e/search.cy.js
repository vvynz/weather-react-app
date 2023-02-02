describe('search form', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to search the weather of a city", () => {
    // happy path
    // tests not always passing - due to api request error
    cy.get(".form-control").type("seoul")
    cy.get('.search-form > .row > :nth-child(3)').click()
    cy.get(".city-display").contains("Seoul, KR")
  })
})