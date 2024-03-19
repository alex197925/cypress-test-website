/** @format */

class HomePage_PO {
  // Create function visit home page "https://webdriveruniversity.com/"
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"));
  }
  clickOn_ContactUs_Button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }
}

export default HomePage_PO;
