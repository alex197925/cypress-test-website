/** @format */

/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  // Input fields Test
  it("Should be able to submit a successful submission vie contact us form", () => {
    // Generating Dynamic Selector with Xpath for Contact Us button
    cy.get("a[href$='contact']")
      .click()
      .then((buttonText) => {
        // console.log("Text of the button is: " + buttonText.text());
        cy.log("Text of the button is: " + buttonText.text());
      });

    // Using Xpath, getting button "Contact Us"
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john@gmail.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do yo provide additional discount on bulk orders?"
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test was completed!!");
  });
});
