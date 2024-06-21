// features/steps/swagLabs.steps.js
const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to the Swag Labs page', async function () {
    await this.page.goto('https://www.saucedemo.com/');
});

Then('the title should contain {string}', async function (expectedTitle) {
    const title = await this.page.title();
    expect(title).toContain(expectedTitle);
});
