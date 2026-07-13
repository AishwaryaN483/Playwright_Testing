// pages/RulesPage.js

const { expect } = require('@playwright/test');

class RulesPage {

    constructor(page) {

        this.frame = page.locator('iframe').first().contentFrame();

        this.rulesTab = this.frame.getByRole('tab', {
            name: /Form rules/i
        });

        this.addRuleButton = this.frame.getByRole('button', {
            name: /Add rule/i
        });

        this.saveButton = this.frame.getByRole('button', {
            name: /save/i
        });
    }

    async openRules() {
        await this.rulesTab.click();
    }

    async createRule() {
        await this.addRuleButton.click();
    }

    async saveRules() {
        await this.saveButton.click();
    }

    async verifyRulesPage() {
        await expect(this.addRuleButton).toBeVisible();
    }
}

module.exports = RulesPage;