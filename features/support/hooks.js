// features/support/hooks.js
const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});
