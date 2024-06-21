# Playwright-cucumber-swaglabs

This repository contains automated tests for the Swag Labs website using Playwright and Cucumber.js.

## Project Overview

The project demonstrates how to use Playwright with Cucumber.js for end-to-end testing. It includes basic tests such as navigating to the Swag Labs page, logging in with valid and invalid credentials, and verifying the page title.

## Features

- **Navigate to Swag Labs Page**: Test to ensure the title contains "Swag Labs".
- **Login with Valid Credentials**: Verify successful login and redirection to the inventory page.
- **Login with Invalid Credentials**: Check for error message display when login credentials are incorrect.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/carizam/Playwright-cucumber-swaglabs.git
   cd Playwright-cucumber-swaglabs

2. Install dependencies:

npm install

   
## Project Structure

saucePLAY
│
├── features
│   ├── swagLabs.feature        # Feature file containing the test scenarios
│   └── steps
│       └── swagLabs.steps.js   # Step definitions for the feature file
│
├── support
│   ├── hooks.js                # Hooks for setup and teardown
│   └── world.js                # Custom world configuration for Playwright
│
├── test-results                # Directory for test results
├── tests                       # Additional test files
│
├── .gitignore                  # Git ignore file
├── cucumber.js                 # Cucumber configuration file
├── package.json                # Node.js dependencies and scripts
├── package-lock.json           # Locked versions of dependencies
└── playwright.config.js        # Playwright configuration file

## Running Tests
To run the tests, use the following command:
npm test

## Writing Tests

Feature: Swag Labs Page

  Scenario: Open Swag Labs Page
    Given I navigate to the Swag Labs page
    Then the title should contain "Swag Labs"

  Scenario: Login with valid credentials
    Given I navigate to the Swag Labs page
    When I enter valid credentials
    Then I should be redirected to the inventory page

  Scenario: Login with invalid credentials
    Given I navigate to the Swag Labs page
    When I enter invalid credentials
    Then I should see an error message

    ![image](https://github.com/carizam/Playwright-cucumber-swaglabs/assets/69807406/7d3224e9-1f80-4b44-ac6d-6d08d07696c6)


## Contributing
Feel free to fork this repository and submit pull requests to help improve the project. 
