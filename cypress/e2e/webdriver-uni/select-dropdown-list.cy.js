/** @format */
///  <reference types="Cypress" />

describe("Interact with dropdown lists via webdriversuni", () => {
  it("Select specific value from select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    // Getting all 3 dropdown lists. select value and Text of each selected list
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("jquery").contains("JQuery");

    // Select with value and validate if the value text is correct
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");

    // Select text and validate text of the dropdown the same
    cy.get("#dropdowm-menu-2").contains("TestNG").contains("TestNG");
  });
});
