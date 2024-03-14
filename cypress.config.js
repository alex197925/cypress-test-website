/** @format */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com",
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    trashAssetsBeforeRuns: true,
    viewportHeight: 2080,
    viewportWidth: 2920,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com",
    },
  },
});
