/** @format */

/// <reference types="cypress" />
/// <reference types= '@cypress/xpath' />

describe("Inspect Automation Test Store item using chain of commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  // Input fields Test
  it("Click on the first item using item header", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });

  it.only("Click on the first item using item text", () => {
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemText) {
        console.log("Selected item: " + itemText.text());
      });
  });

  it("Click on the first item using index", () => {
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
