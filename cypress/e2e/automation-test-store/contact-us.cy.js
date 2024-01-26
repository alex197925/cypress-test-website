/** @format */

/// <reference types="cypress" />
/// <reference types= '@cypress/xpath' />

describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  // Input fields Test
  it("Should be able to submit a successful submission vie contact us form", () => {
    // cy.get(".info_links_footer > :nth-child(5) > a").click();

    // Generating Dynamic Selector with Xpath for Contact Us button
    cy.get("a[href$='contact']").click();

    // Using Xpath, getting button "Contact Us"
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do yo provide additional discount on bulk orders?"
    );
    cy.get(".col-md-6 > .btn").click();
  });
});
