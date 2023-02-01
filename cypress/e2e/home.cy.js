describe('home page', () => {
  it("should visit", ()=> {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct test", () => {
    cy.visit("http://localhost:3000")
    cy.get("h1").contains("Weather App")
  })
  
})