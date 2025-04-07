# Afnanilab Assignment

This repository contains an automated test suite for verifying the donation process flow of a web application. The tests are written using [Cypress](https://www.cypress.io/) and include a CI/CD pipeline configuration using GitHub Actions.

## Project Structure

```
cypress/
├── e2e/
│   └── spec.cy.js          # Test cases for the donation process
├── pages/
│   └── DonationPage.js     # Page Object Model for the donation page
.github/
└── workflows/
  └── cypress-ci.yml      # GitHub Actions workflow for running Cypress tests
README.md                   # Project documentation
```

## Features

- **Automated Tests**: Covers the complete donation process, including donor details, geolocation stubbing, payment, and confirmation.
- **Page Object Model (POM)**: Encapsulates page interactions in a reusable class (`DonationPage.js`).
- **CI/CD Integration**: Automatically runs tests on every push or pull request to the `master` branch using GitHub Actions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Cypress](https://www.cypress.io/) installed via npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/afnanilab-assignment.git
   cd afnanilab-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests Locally

1. Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```

2. Run the tests from the Cypress UI.

Alternatively, run tests in headless mode:
```bash
npx cypress run
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/cypress-ci.yml`) is configured to:

1. Run tests on every push or pull request to the `master` branch.
2. Upload Cypress artifacts (screenshots and videos) if tests fail.

### Triggering the Workflow

- Push changes to the `master` branch:
  ```bash
  git push origin master
  ```

- Create a pull request targeting the `master` branch.

## Test Details

### Test Case: Donation Process Flow

The test suite (`spec.cy.js`) verifies the following steps:

1. **Visit Donation Page**: Navigates to the donation page.
2. **Select Donation Level**: Chooses a donation level and proceeds.
3. **Fill Donor Details**: Inputs donor information such as name, phone, email, and address.
4. **Stub Geolocation**: Mocks the user's location to simulate being in Dhaka.
5. **Verify Payment Page**: Ensures navigation to the payment page.
6. **Fill Payment Details**: Inputs payment information, including card details and billing address.
7. **Submit Payment**: Completes the payment process.
8. **Verify Confirmation Page**: Confirms successful navigation to the confirmation page.

### Page Object Model

The `DonationPage.js` file encapsulates all interactions with the donation page, including:

- Visiting the page
- Selecting donation levels
- Filling donor and payment details
- Stubbing geolocation
- Verifying navigation between pages


