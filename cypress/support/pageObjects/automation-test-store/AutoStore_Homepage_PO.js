/** @format */

class AutoStore_Homepage_PO {
  accessHomepage() {
    cy.visit("https://automationteststore.com/");
  }

  clickOn_Hair_Care_button() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}

export default AutoStore_Homepage_PO;
