/** @format */

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_Po";
///  <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      // if not working then use next use globalThis.data = data;
      // this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
    //cy.visit("http://webdriveruniversity.com/")
    //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

    const homepage_Po = new HomePage_PO();
    homepage_Po.visitHomepage();
    homepage_Po.clickOn_ContactUs_Button();
  });

  // Input fields Test
  it("Should be able to submit a successful submission vie contact us form", () => {
    // cypress code
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    //cy.get("#contact-us").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("How i can learn Cypress?");
    // cy.get('[type="submit"]').click();
    // cy.get("h1").should("have.text", "Thank You for your Message!");

    cy.webdriverUni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How i can learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission vie contact us form as fields are required ", () => {
    // cypress code
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get("textarea.feedback-input").type("Some comments.....");
    // cy.get('[type="submit"]').click();
    // cy.get("body").contains("Error: Invalid email address");

    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How i can learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
