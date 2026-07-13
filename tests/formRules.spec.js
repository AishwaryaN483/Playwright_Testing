const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const FormPage = require('../pages/FormPage');
const RulesPage = require('../pages/RulesPage');

const testData = require('../test-data/testData');

test('Create Form with Rules', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const formPage = new FormPage(page);
    const rulesPage = new RulesPage(page);

    await loginPage.navigate();

    await loginPage.login(
        testData.login.email,
        testData.login.password
    );

    await dashboardPage.openAutomation();

    await dashboardPage.createForm();

    await formPage.createForm(
        testData.form.name,
        testData.form.description
    );

    await formPage.addTwoTextBoxes();

    await formPage.saveForm();

    await rulesPage.openRules();

    await rulesPage.createRule();

    await rulesPage.saveRules();

});