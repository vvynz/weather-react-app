describe('search form', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to search the weather of a city", () => {
    // happy path
    cy.get(".form-control").type("seoul")
    cy.get(".search-btn").eq(1).click()
    cy.get(".city-display").contains("Seoul, KR")
  })
})