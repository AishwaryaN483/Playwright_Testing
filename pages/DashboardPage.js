// pages/DashboardPage.js

const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.automationMenu = page.getByRole('link', {
            name: 'Automation',
            exact: true
        });

        this.createButton =
            page
                .getByRole('heading', {
                    name: /Automation Create Manage/
                })
                .getByLabel('Create');

        this.taskBotOption = page.getByRole('button', {
            name: /Task Bot/i
        });

        this.formOption = page.getByRole('button', {
            name: /Form/i
        });
    }

    async verifyDashboard() {
        await expect(this.automationMenu).toBeVisible();
    }

    async openAutomation() {
        console.log("Opening Automation section...");
        await this.automationMenu.click();
    }

    async createTaskBot() {
        console.log("Opening Create menu...");
        await this.clickCreate();

        console.log("Selecting Task Bot...");
        await this.taskBotOption.click();
    }

    async clickCreate() {
        await this.createButton.click();
    }

    async createForm() {
        await this.clickCreate();
        await this.formOption.click();
    }
}

module.exports = DashboardPage;