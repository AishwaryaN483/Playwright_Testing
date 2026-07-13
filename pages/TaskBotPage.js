// pages/TaskBotPage.js

const { expect } = require('@playwright/test');

class TaskBotPage {

    constructor(page) {
        this.page = page;

        // Creation dialog
        this.taskName = page.getByRole('textbox', { name: 'Name' });
        this.description = page.getByRole('textbox', {
            name: 'Description (optional)'
        });

        this.createEditButton = page.getByRole('button', {
            name: /Create & edit/i
        });

        // Editor
        this.searchActions = page.getByPlaceholder('Search actions');

        this.messageBox = page.getByRole('button', {
            name: /Message box/i
        });

        this.messageTextbox = page.getByRole('textbox').nth(2);

        this.saveButton = page.getByRole('button', {
            name: /^Save$/
        });
    }

    async createTask(name, description) {
        console.log("Entering Task Bot details...");

        await this.taskName.fill(name);
        await this.description.fill(description);

        console.log("Clicking Create & Edit...");
        await this.createEditButton.click();

        console.log("Waiting for Task Bot editor...");
        await this.searchActions.waitFor({ state: 'visible' });

        console.log("Task Bot editor loaded.");
    }

    async searchMessageBox(keyword) {
        console.log("Searching Message Box...");
        await this.searchActions.fill(keyword);
    }

    async addMessageBox() {
        console.log("Adding Message Box...");

        // Add Message Box to the workflow
        await this.messageBox.dblclick();

        // Give the UI time to create the node
        await this.page.waitForTimeout(1000);

        // Click the Message Box node in the workflow
        await this.page.getByText('Message box').last().click();

        // Wait for the properties panel to load
        await this.page.waitForTimeout(1000);
    }

    async enterMessage(message) {

        console.log("Entering message...");

        await this.page.pause();     // Debug pause

        await this.messageTextbox.fill(message);
    }

    async saveTask() {
        console.log("Saving Task Bot...");
        await this.saveButton.click();
    }

    async verifyEditorLoaded() {
        await expect(this.searchActions).toBeVisible();
    }
}

module.exports = TaskBotPage;