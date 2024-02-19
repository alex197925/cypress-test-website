/** @format */

/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of users", () => {
    let userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1  td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
        }
        cy.log("Found total age of users is: " + numb);
        expect(numb).to.eq(322);
      });
  });
  it.only("Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).equal("80");
          });
      }
    });
  });
});
