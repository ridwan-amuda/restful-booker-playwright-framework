# 🏨 Restful Booker Playwright Automation Framework

A Playwright and Cucumber BDD automation framework developed as part of a Quality Engineer technical exercise.

The framework automates the critical user journeys identified in the supplied user stories and demonstrates a layered testing approach using both UI automation and API validation.

---

# Application Under Test

**Website**

https://automationintesting.online/

**API**

https://automationintesting.online/api

---

# Technical Stack

- Playwright
- JavaScript
- Cucumber BDD
- Axios
- Node.js
- GitHub Actions

---

# User Stories Covered

### User Story 1

**As a new booking user**

I want to see which rooms are available on the dates I select

So that I can book suitable rooms quickly.

Automated scenarios:

- Availability Checker is displayed.
- User searches for available rooms using valid dates.

---

### User Story 2

**As a new booking user**

I want to know only the rooms that are available

So that I can avoid making bookings that will fail.

Automated scenario:

- Available rooms are returned for the selected date range.

---

### User Story 3

**As an administrator**

I want only authenticated users to access the administration area

So that the system remains secure.

Automated scenario:

- Invalid administrator credentials are rejected.

---

# Test Strategy

The framework follows a layered testing approach by combining UI automation with API validation.

Playwright is used to automate the critical customer journeys, while the API is used to independently validate backend data that supports those journeys. This provides additional confidence that the application behaves correctly beyond what is visible through the user interface alone.

This approach keeps the automation maintainable, provides faster feedback where API validation is appropriate, and verifies the end-user experience through UI automation.

---

# Framework Structure

```text
restful-booker-playwright-framework

├── api
│   └── RoomAPI.js
│
├── config
│   └── environment.js
│
├── features
│   └── ui
│
├── hooks
│   └── hooks.js
│
├── pages
│   ├── AdminPage.js
│   └── HomePage.js
│
├── reports
│
├── step-definitions
│   └── ui
│
├── utils
│   └── constants.js
│
├── cucumber.js
├── playwright.config.js
├── package.json
└── README.md
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/restful-booker-playwright-framework.git
```

Install dependencies.

```bash
npm install
```

Install Playwright browsers.

```bash
npx playwright install
```

---

# Environment Configuration

Create a `.env` file in the project root.

```env
BASE_URL=https://automationintesting.online
API_BASE_URL=https://automationintesting.online/api
BROWSER=chromium
HEADLESS=false
DEFAULT_TIMEOUT=60000
```

---

# Running the Tests

Run all tests.

```bash
npm test
```

Run only the UI scenarios.

```bash
npm run test:ui
```

---

# Reports

After execution, a Cucumber HTML report is generated in:

```text
reports/cucumber-report.html
```

Playwright also captures screenshots, traces and videos for failed tests to support defect investigation.

---

# CI/CD Approach

TThe framework is designed to support continuous integration by automatically executing the Playwright BDD scenarios on every code change. As part of the Availability Checker journey, the framework also performs API validation to provide additional confidence in the backend data supporting the user interface..

```text
Developer Push
        │
        ▼
Checkout Source
        │
        ▼
Install Dependencies
        │
        ▼
Run Automated Tests
        │
        ▼
Generate Reports
        │
        ▼
Publish Results
        │
        ▼
Pass / Fail Build
```

The same approach can be integrated into GitHub Actions, Azure DevOps or Jenkins.

---

# Design Decisions

The framework has been structured to support maintainability and readability.

- **Page Object Model** keeps UI locators separate from test logic.
- **Reusable API classes** centralise API interactions.
- **Environment configuration** avoids hard-coded values.
- **BDD feature files** provide traceability between user stories and automated scenarios.
- **Layered testing** combines API and UI validation to provide faster feedback and greater confidence.