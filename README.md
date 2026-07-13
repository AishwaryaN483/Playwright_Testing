# Playwright_Testing

# Automation Anywhere UI Automation using Playwright

## Objective

This project automates selected workflows of the **Automation Anywhere Community Edition** using **Playwright** and follows the **Page Object Model (POM)** design pattern.

The automation replicates the manual workflow performed in the application and validates the execution of the primary UI interactions.

---

# Automation Flow

## Use Case 1 – Message Box Task

```text
Start
   │
   ▼
Launch Browser
   │
   ▼
Login to Automation Anywhere
   │
   ▼
Navigate to Automation
   │
   ▼
Create → Task Bot
   │
   ▼
Enter Task Name
   │
   ▼
Enter Description
   │
   ▼
Create & Edit
   │
   ▼
Open Task Bot Editor
   │
   ▼
Search "Message Box"
   │
   ▼
Add Message Box Action
   │
   ▼
End
```

---

## Use Case 2 – Form Creation

```text
Start
   │
   ▼
Launch Browser
   │
   ▼
Login
   │
   ▼
Navigate to Automation
   │
   ▼
Create → Form
   │
   ▼
Enter Form Name
   │
   ▼
Enter Description
   │
   ▼
Open Form Designer
   │
   ▼
Add Two TextBox Components
   │
   ▼
Save Form
   │
   ▼
End
```

---

# Framework Used

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

---

# Project Structure

```text
Playwright_Testing/

│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── TaskBotPage.js
│   ├── FormPage.js
│   └── RulesPage.js
│
├── tests/
│   ├── messageBox.spec.js
│   └── formRules.spec.js
│
├── test-data/
│   └── testData.js
│
├── utils/
│
├── playwright.config.js
├── package.json
├── README.md
```

---

# Page Object Model

The automation follows the Page Object Model to separate UI actions from test logic.

## LoginPage

Responsible for

- Opening the application
- Logging into Automation Anywhere
- Login verification

---

## DashboardPage

Responsible for

- Opening Automation
- Opening Create Menu
- Navigating to Task Bot
- Navigating to Form

---

## TaskBotPage

Responsible for

- Creating a Task Bot
- Entering Task details
- Opening Task Bot editor
- Searching Message Box
- Adding Message Box action

---

## FormPage

Responsible for

- Creating Form
- Opening Form Designer
- Adding TextBox components
- Saving Form

---

## RulesPage

Contains the structure for Rules Builder automation and future rule configuration.

---

# Test Files

## messageBox.spec.js

Automates the complete workflow for creating a Task Bot.

### Automated Steps

- Launch Browser
- Login
- Navigate to Automation
- Create Task Bot
- Enter Task Details
- Open Task Bot Editor
- Search Message Box
- Add Message Box

---

## formRules.spec.js

Automates the initial Form Builder workflow.

### Automated Steps

- Launch Browser
- Login
- Navigate to Automation
- Create Form
- Enter Form Details
- Open Form Designer
- Add Two TextBox Components
- Save Form

---

# Test Data

Reusable input values are maintained separately in

```text
test-data/testData.js
```

This stores

- Login Credentials
- Task Name
- Description
- Message Text
- Form Name
- TextBox Details
- Rule Names

This allows easy modification without changing the automation scripts.

---

# Assertions

Basic Playwright assertions have been implemented to verify

- Successful page navigation
- UI element visibility
- Task Bot editor loading
- Form designer loading
- Functional execution of automated workflow

---

# Running the Project

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Individual Tests

### Message Box

```bash
npx playwright test tests/messageBox.spec.js
```

### Form

```bash
npx playwright test tests/formRules.spec.js
```

---

# Playwright HTML Report

After execution, Playwright automatically generates an HTML report.

To view the report

```bash
npx playwright show-report
```

The report includes

- Test execution summary
- Pass/Fail status
- Screenshots (on failure)
- Trace information
- Video recording (if enabled)
- Error logs

---

# Current Automation Coverage

## Completed

### Use Case 1

✔ Login Automation

✔ Navigation to Automation

✔ Task Bot Creation

✔ Task Details Entry

✔ Task Bot Editor Launch

✔ Message Box Search

✔ Message Box Addition

---

### Use Case 2

✔ Login Automation

✔ Navigation to Automation

✔ Form Creation

✔ Form Details Entry

✔ Form Designer Launch

✔ Addition of Two TextBox Components

✔ Basic Save Flow

---

# Notes

This project demonstrates the implementation of UI automation using Playwright with the Page Object Model (POM). The automation focuses on reproducing the primary manual workflows for Task Bot and Form creation while maintaining a modular and reusable test structure.