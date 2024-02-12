/** @format */
///  <reference types="Cypress" />

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("I should be able to drag and drop a draggable item", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });

    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("I should be able to perform a double mouse click", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#double-click").dblclick("center");
  });
});
