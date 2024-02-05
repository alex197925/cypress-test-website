/** @format */
///  <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("contain", "contactus");

    cy.go("back");
    cy.reload();
    cy.url().should("contain", "https://webdriveruniversity.com");
    // cy.reload(true);  true forces the reload without cache.

    cy.go("forward");
    cy.url().should("contain", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .should("contain", "LOGIN PORTAL")
      .click();
  });
});
