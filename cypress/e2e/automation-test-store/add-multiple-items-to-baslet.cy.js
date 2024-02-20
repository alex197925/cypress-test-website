/** @format */
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";

/// <reference types="cypress" />

describe("Add multiple items to basket  ", () => {
  // 1. Initialize Page Object
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();

  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    autoStore_Homepage_PO.accessHomePage();
    autoStore_Homepage_PO.clickOn_hairCare_Link();
  });

  it("Add specific item to basket", () => {
    // cy.log(data);
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
