/** @format */
///  <reference types="Cypress" />

describe("Interact with dropdown lists via webdriversuni", () => {
  it("Select specific value from select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    // Getting all 3 dropdown lists. select one value of each selected list
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng");
    cy.get("#dropdowm-menu-3").select("jquery");
  });
});
