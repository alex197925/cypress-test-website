/** @format */
///  <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  // beforeEach(() => {
  //   cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // });

  // Input fields Test
  it("Should be able to submit a successful submission vie contact us form", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cypress code
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    //cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Smith");
    cy.get('[name="email"]').type("test@gmail.com");
    cy.get("textarea.feedback-input").type("Some comments.....");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission vie contact us form as fields are required ", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cypress code
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("Smith");
    cy.get("textarea.feedback-input").type("Some comments.....");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
