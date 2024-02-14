/** @format */
///  <reference types="Cypress" />

describe("Test datepicker via webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    cy.get(".glyphicon-calendar").click();
  });
});
