# Deel
This is an automation library for Deel QA Automation application

Pre-requisite

-> javascript and node must be installed.

Run the following command on the root folder to install all the dependencies for the the project. 

-> npm install.

To run the project in headless mode and to get prompted to the allure report at the end of the execution run the following command:

-> npm run test:allure

To run the project with the Cypress UI run the following command:

-> npx cypress open

Wait for the UI to load and under the "DeelTests" folder you can run manually each of the 2 test files("login.spec.js" and "createFixedRateContract.spec.js").
