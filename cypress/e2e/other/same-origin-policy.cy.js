/** @format */
///  <reference types="Cypress" />

describe("Cypress web security", () => {
  it("Validate visiting two different domains", () => {
    // Test will pass, after added chromeWebSecurity: false, to the config.js file

    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });

  it.only("Validate visiting two different domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
