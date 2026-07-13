// pages/FormPage.js

const { expect } = require('@playwright/test');

class FormPage {
    constructor(page) {
        this.page = page;

        // Create Form dialog
        this.formName = page.getByRole('textbox', { name: 'Name' });
        this.description = page.getByRole('textbox', {
            name: 'Description (optional)'
        });

        this.createButton = page.getByRole('button', {
            name: /Create/i
        });

        // Form Designer
        this.textBoxButton = page
            .locator('iframe')
            .first()
            .contentFrame()
            .getByRole('button', { name: /Text Box/i });

        this.saveButton = page
            .locator('iframe')
            .first()
            .contentFrame()
            .getByRole('button', { name: /save/i });
    }

    async createForm(name, description) {
        await this.formName.fill(name);
        await this.description.fill(description);
        await this.createButton.click();
    }

    async addTwoTextBoxes() {
        await this.textBoxButton.click();
        await this.textBoxButton.click();
    }

    async saveForm() {
        await this.saveButton.click();
    }

    async verifyDesignerLoaded() {
        await expect(this.textBoxButton).toBeVisible();
    }
}

module.exports = FormPage;