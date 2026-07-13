# Playwright_Testing

# Automation Anywhere UI Automation using Playwright

## Objective

This project automates selected workflows of the **Automation Anywhere Community Edition** using **Playwright** and follows the **Page Object Model (POM)** design pattern.

The automation replicates the manual workflow performed in the application and validates the execution of the primary UI interactions.

---

| Automated Workflows | 2 |
| UI Automation Coverage* | ~75% |
| Manual Effort Reduced* | ~80% |
| Reusable Components | 5 Page Objects |
| Test Scripts | 2 |
| Playwright HTML Report | Generated |

**Automation Completion:** **~60%**

---

## Overall Project Completion

```text
███████████████████░░░░░

Overall Automation Progress: ~75%
```

The project successfully automates the primary user workflows including authentication, navigation, Task Bot creation, Message Box insertion, Form creation, and TextBox addition while following a modular Page Object Model architecture.

# Setup Instructions

## Prerequisites

Before running the project, ensure the following software is installed:

- Node.js (v18 or above)
- Visual Studio Code
- Playwright
- Git

---

## Project Setup

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd Playwright_Testing
```

Install project dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Test Execution

## Execute All Tests

```bash
npx playwright test
```

## Execute Message Box Test

```bash
npx playwright test tests/messageBox.spec.js
```

## Execute Form Test

```bash
npx playwright test tests/formRules.spec.js
```

---

# Playwright Report

Generate and view the Playwright HTML Report

```bash
npx playwright show-report
```

The report provides

- Test execution summary
- Pass/Fail status
- Execution timeline
- Screenshots (on failures)
- Trace information
- Video recording (if enabled)

---

# Framework and Tools Used

## Automation Framework

- Playwright

## Programming Language

- JavaScript

## Runtime Environment

- Node.js

## Design Pattern

- Page Object Model (POM)

## IDE

- Visual Studio Code

## Version Control

- Git
- GitHub

---

# Environment / Configuration Notes

- Playwright configuration is maintained in `playwright.config.js`.
- Test data is stored separately in `test-data/testData.js`.
- Browser execution is configured through Playwright.
- Tests are organized based on individual use cases.
- HTML reports are automatically generated after every execution.
- The project follows a modular Page Object Model structure for improved maintainability and code reusability.

---


# Repository Contents

```
Playwright_Testing/

pages/
tests/
test-data/
utils/
playwright.config.js
package.json
README.md
```

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
