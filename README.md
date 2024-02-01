<!-- @format -->

### My Learning Journey

## What is Cypress?

> [Link to Cypress Website](https://www.cypress.io/app#browser_testing)

## How Cypress Works?

> [Link to Cypress Website](https://www.cypress.io/how-it-works)

## Differences between Cypress and other Automation Tools?!

### [cypress_differences.pdf](https://github.com/alex197925/cypress-test-website/files/14050846/cypress_differences.pdf)

## Cypress Test Runner

> [Link to Cypress Website](https://doccypress.io/guides/core-concepts/cypress-app)

## Cypress API - Overview (get(), .click(), .type() ....)

> [Link to Cypress Website](https://docs.cypress.io/api/table-of-contents/)

## Mocha - Overview

> [Link to MOcha Website](https://mochajs.org/)

### [mocha_overview.pdf](https://github.com/alex197925/cypress-test-website/files/14050923/mocha_overview.pdf)

## Selectors - Best Practices (data-\*)

> [Link to Cypress Website](https://docs.cypress.io/guides/references/best-practices)

## Xpath Selectors

> [Link to w3schools Website](https://www.w3schools.com/xml/xpath_syntax.asp)

## Chai Assertions

> [Link to Chai Website](https://www.chaijs.com/)

> [Link to Cypress Website](https://docs.cypress.io/guides/references/assertions#Adding-New-Assertions)

> [Link to Cypress Website](https://docs.cypress.io/guides/references/assertions#Chai-jQuery)

## Cypress Contains

> [Link to Cypress Website](https://docs.cypress.io/api/commands/contains#Syntax)

## Document

### Get the window.document of the page that is currently active.

> [Link to Cypress Website](https://docs.cypress.io/api/commands/document#Syntax)

## Title

> [Link to Cypress Website](https://docs.cypress.io/api/commands/title#Syntax)

## URL

> [Link to Cypress Website](https://docs.cypress.io/api/commands/url#Syntax)

## Headless Electron Browser

```
npx cypress run
```

#### Command Line

> [Link to Cypress Website](https://docs.cypress.io/guides/guides/command-line)

## Chains of Commands

> [Link to Cypress Website](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands)

## Synchronous_vs_Asynchronous

### [synchronous_vs_asynchronous.pdf](https://github.com/alex197925/cypress-test-website/files/14082974/synchronous_vs_asynchronous.pdf)

## Cypress Asynchronous Nature

> [Link to Cypress Website](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)

## Cypress Log Command

> [Link to Cypress Website](https://docs.cypress.io/api/commands/log)

## then

> [Link to Cypress Website](https://docs.cypress.io/api/commands/then)

## Closures

> [Link to Cypress Website](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures)

## Iteration through Elements

### - each()

> [Link to Cypress Website](https://docs.cypress.io/api/commands/each#Examples)

### Aliases

> [Link to Cypress Website](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Aliases)

### Invoke

> [Link to Cypress Website](https://docs.cypress.io/api/commands/invoke#Syntax)

### Trade-offs

> [Link to Cypress Website](https://docs.cypress.io/guides/references/trade-offs#Permanent-trade-offs-1)

### Recipes

> [Link to Cypress Website](https://docs.cypress.io/examples/recipes/#Fundamentals)

### Handling Multiple Browser table

<small>jQuery removeAttr() Method.</small><br>
<small>Remove terget_blank attr from link element</small>

```
 cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
```

> [jQuery removeAttr Docs](https://www.w3schools.com/jquery/html_removeattr.asp)

### Limitations

<small> **_Cypress requires that the URLs navigated to have the same superdomain for the entirety of a single test_**</small>

> [Link to Cypress Website](https://docs.cypress.io/guides/guides/web-security#Limitations)
