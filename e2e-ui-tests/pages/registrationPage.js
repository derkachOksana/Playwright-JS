const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.name = page.locator("[placeholder='Full name']");
        this.email = page.locator("[placeholder='Email address']");
        this.password = page.locator("[placeholder='Password']");
        this.registerButton = page.getByRole('button');
        this.signInLink = page.locator("[href='/sign-in']");


    }

    async register(fullName, userEmail, userPassword) {
        await this.name.type(fullName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }

    async clickSignInFromRegistration() {
        await this.signInLink.click();
    }



}