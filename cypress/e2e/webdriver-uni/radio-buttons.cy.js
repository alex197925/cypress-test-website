/** @format */
///  <reference types="Cypress" />

describe("Verify radio buttons  via webdriversuni", () => {
  before(function () {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });
  it.only("Validate the state of specific radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");

    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");
    cy.get("[value='pumpkin']").should("not.be.checked");

    cy.get("[value='cabbage']").should("be.disabled");
  });
});
