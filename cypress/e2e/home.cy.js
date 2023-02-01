describe('main page', () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct test", () => {
    cy.get("h1").contains("Weather App")
  })
  
})