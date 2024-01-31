/** @format */

/// <reference types="cypress" />

describe("Alias and invoke ", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it("Validate a specific hair care product", () => {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate product thumbnail", () => {
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate of total and sale products", () => {
    // cy.get(".thumbnail")
    //   .as("productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("textPrice");
    cy.get(".thumbnail").find(".priceold").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@textPrice").then(($linkText) => {
      // cy.log($linkText);
      let itemsPiceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (let i = 0; i < itemPrice.length; i++) {
        // cy.log(itemPrice[i]);
        itemsPiceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPiceTotal;
      // cy.log("Non sale price in total:" + itemsPiceTotal);
    });
  });
});
