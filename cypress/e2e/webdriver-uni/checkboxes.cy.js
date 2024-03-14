/** @format */
///  <reference types="Cypress" />

describe("Verify checkboxes via webdriversuni", () => {
  beforeEach(() => {
    // Custom command
    // cy.navigateTo_WebdriverUni_Homepage();
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check and validate checkbox", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    // Improving code
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    //cy.get("@option-1").check();
    cy.get("@option-1").check().should("be.checked");
  });
  it("Uncheck and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });
  it("Check multiple checkboxes with the values", () => {
    cy.get('[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
