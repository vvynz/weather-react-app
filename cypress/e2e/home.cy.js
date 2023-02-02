describe('main page', () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct test", () => {
    cy.get("h1").contains("Weather App")
  })
  
  context("Weather app body, info display", () => {
    it("displays the user's city and current date", () => {
      cy.getByData("date-header").contains("Thursday")
      cy.getByData("city-header").contains("Toronto, CA")
    })

    it("displays the current weather info", () => {
      // cy.getByData("temp-header").contains("-5°C") // this changes every time the page refreshes
      cy.getByData("temp-header").find("a").click()
      // cy.getByData("temp-header").find("a").contains("°C") // this one changes everytime...
      cy.getByData("feels-like").contains("Feels like")
      cy.getByData("weather-description").contains("light snow") // this will also change
    })
  })

  context("upcoming forecast", () => {
    it("should display a 5-day forecast", () => {
      cy.get(".WeatherForecast").should("exist")
    })
  })
})