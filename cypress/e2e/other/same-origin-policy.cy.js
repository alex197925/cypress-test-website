/** @format */
///  <reference types="Cypress" />

describe("Cypress web security", () => {
  it("Validate visiting two different domains", () => {
    // Test  not will pass

    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://www.google.com");
  });

  it("Validate visiting two different domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
