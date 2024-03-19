/** @format */

const { defineConfig } = require("cypress");

// Multiple configuration files

const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  // Navigate to config folder and file "name".json
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found..");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "b3j1a8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com",
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoUploadOnPasses: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    trashAssetsBeforeRuns: true,
    reporter: "cypress-multi-reporters",
    // viewportHeight: 2080,
    // viewportWidth: 2920,
    reporterOptions: {
      configFile: "reporter-config.json",
    },

    retries: {
      runMode: 0,
      openMode: 1,
    },

    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com",
    },
  },
});
