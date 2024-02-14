/** @format */

/// <reference types="cypress" />

describe("Test File upload via webdriveruni", () => {
  it("Upload a file...", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png").click();
    cy.get("#submit-button").click();

    cy.on("window:alert", (str) => {
      expect(str).to.eq("Your file has now been uploaded!");
    });
  });

  it.only("Upload No file...", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("You need to select a file to upload!");
    });
  });
});
