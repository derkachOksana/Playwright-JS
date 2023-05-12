const { test, expect, request } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let registrationPage;
const env = config.default.use.env;


test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test('Registration with valid data', async ({ page }) => {
        await registrationPage.register(userData.generatedFullName, userData.generatedEmail, userData.password);
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sign-in page from registration', async ({ page }) => {
        await registrationPage.clickSignInFromRegistration();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });


});