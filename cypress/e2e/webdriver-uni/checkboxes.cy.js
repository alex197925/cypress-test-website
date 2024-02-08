/** @format */
///  <reference types="Cypress" />

describe("Verify checkboxes via webdriversuni", () => {
  it("check and validate checkbox", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    // cy.get("#checkboxes > :nth-child(1) > input").check();
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    // Improving code
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    //cy.get("@option-1").check();
    cy.get("@option-1").check().should("be.checked");
  });
});
