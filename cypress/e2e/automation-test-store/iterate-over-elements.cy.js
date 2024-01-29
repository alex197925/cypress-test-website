/** @format */

/// <reference types="cypress" />

describe("Iterate over elements  ", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it.only("Log information of all hair care products", () => {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to basket", () => {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
});
