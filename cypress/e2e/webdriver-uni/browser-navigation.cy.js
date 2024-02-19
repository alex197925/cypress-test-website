/** @format */
///  <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    // Navigate to the home page
    cy.visit("/");
    // Click on button "Contact us", remove attribute _target, click on link
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // Confirm that url contain contactus path
    cy.url().should("contain", "contactus");

    // Navigate back to the home page
    cy.go("back");
    // Reload page
    cy.reload();
    // Confirm correct home page url
    cy.url().should("contain", "https://webdriveruniversity.com");
    // cy.reload(true);  true forces the reload without cache.

    // Navigate to contact us
    cy.go("forward");
    // Confirm right url "contactus"
    cy.url().should("contain", "contactus");

    // Navigate back to home page
    cy.go("back");
    // Get Login portal link, remove _target attribute, click
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Confirm right url link contain "Login-Portal"
    cy.url().should("contain", "Login-Portal");
    // Navigate back to home page
    cy.go("back");

    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("contain", "To-Do-List");
    cy.go("back");
  });
});
