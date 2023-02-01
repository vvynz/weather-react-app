describe('main page', () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct test", () => {
    cy.get("h1").contains("Weather App")
  })
  
  context("Weather app body, info display", () => {
    it("displays the user's city and current date", () => {
      cy.get(".date-display").contains("Wednesday 17:42")
      cy.get(".city-display").contains("Toronto, CA")
    })

    it("displays the current weather info", () => {
      // cy.get(".temp-display").contains("-5°C") // this changes every time the page refreshes
      cy.get(".temp-display").find("a").click()
      // cy.get(".temp-display").find("a").contains("°C") // this one changes everytime...
      cy.get(".feels_like").contains("Feels like")
      cy.get(".weather-desc").contains("clear sky") // this will also change
    })
  })

  context("upcoming forecast", () => {
    it.only("should display a 5-day forecast", () => {
      cy.get(".WeatherForecast").should("exist")
    })
  })
})