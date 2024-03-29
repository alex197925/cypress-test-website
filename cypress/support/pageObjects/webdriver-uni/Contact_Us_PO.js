/** @format */

class Contact_Us_PO {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    comments,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comments);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 60000 });
    // Make screenshot
    // cy.screenshot();
    // cy.screenshot("Make a contact form submission screenshot");
  }
}

export default Contact_Us_PO;
