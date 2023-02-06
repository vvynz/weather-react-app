describe("search form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("Search button", () => {
    it("allows users to search the weather of a city", () => {
      // happy path
      // tests not always passing - due to api request error
      cy.getByData("search-input").type("seoul");
      cy.getByData("search-btn").click();
      cy.getByData("city-header").contains("Seoul, KR");
    });

    it("will display an error message if city isn't found", () => {
      cy.get(".form-control").type("sappporro");
      cy.get(".search-form > .row > :nth-child(3").click();
      cy.getByData("error-display").should("exist");
    });

    it("will remove the error message once a city is found", () => {
      cy.get(".form-control").type("sapporo");
      cy.getByData("search-btn").click();
      cy.getByData("error-display").should("not.exist");
    });
  });

  context("Get location button", () => {
    it("will get the user's current location", () => {
      cy.getByData("get-location-btn").click()
      cy.getByData("city-header").contains("Greenwood Coxwell", { timeout: 10000 })
    })
  })
});
