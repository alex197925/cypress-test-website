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

    //Create Alias
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("textPrice");
    cy.get(".thumbnail").find(".pricenew ").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    //use Alias
    cy.get("@textPrice").then(($linkText) => {
      // cy.log($linkText);
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (let i = 0; i < itemPrice.length; i++) {
        // cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      // cy.log("Non sale price in total:" + itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemsPrice = 0;
        let saleItemPrice = $linkText.split("$");
        let i;
        for (let i = 0; i < saleItemPrice.length; i++) {
          // cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price in total:" + saleItemsPrice);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
