const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const TaskBotPage = require('../pages/TaskBotPage');

const testData = require('../test-data/testData');

test('Create Task Bot with Message Box', async ({ page }) => {
    console.log("===== Test Started =====");

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const taskBotPage = new TaskBotPage(page);

    await loginPage.navigate();

    await loginPage.login(
        testData.login.email,
        testData.login.password
    );

    await dashboardPage.openAutomation();

    await dashboardPage.createTaskBot();

    await taskBotPage.createTask(
        testData.taskBot.name,
        testData.taskBot.description
    );

    await taskBotPage.searchMessageBox("message");

    await taskBotPage.addMessageBox();

    await taskBotPage.enterMessage(
        testData.taskBot.message
    );

    await taskBotPage.saveTask();
    console.log("===== Test Finished =====");
});