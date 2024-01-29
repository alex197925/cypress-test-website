/** @format */

/// <reference types="cypress" />
/// <reference types= '@cypress/xpath' />

describe("Verifying variables, cypress commands and jquery commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it("Navigating to specific product pages", () => {
    // Recommended Approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();

    // THE FOLLOWING WILL PASS
    // -----------------------------------------------------------------
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // skincareLink.click();

    // THE FOLLOWING WILL FAIL
    // ------------------------------------------------------------------
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // makeupLink.click();
    // skincareLink.click();
  });
  it.only("Check if header exist in Makeup product page", () => {
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    // Following code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
    });
  });
});
