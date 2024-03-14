/** @format */
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_Hair_Care_button();
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    autoStore_HairCare_PO.addHairCareProductsToBasket();
  });
});
