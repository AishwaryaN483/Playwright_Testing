// pages/LoginPage.js

const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async navigate() {
        await this.page.goto('https://community.cloud.automationanywhere.digital/');
    }

    async login(email, password) {
    console.log("Logging into Automation Anywhere...");

    await this.username.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();

    console.log("Login button clicked.");
}

    async verifyLogin() {
        // Wait until redirected to the home page
        await this.page.waitForURL(/home/);

        // Basic assertion
        await expect(this.page).toHaveURL(/home/);
    }
}

module.exports = LoginPage;