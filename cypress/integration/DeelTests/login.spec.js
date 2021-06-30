///<reference types="cypress" />
import LoginPage from "../DeelPOMs/LoginPage.js";

describe('Login', () => {
    const loginPage = new LoginPage();

    let email = 'pj9lopez@hotmail.com';
    let password = 'Pablodeeltest1*';
    let testEmail  = 'test';
    let testPassword = 'test';

    // Opens the browser in the login page before starting each of the tests on the suite.
    beforeEach(() => {
      cy.visit('https://app.letsdeel.com/login')
    });
  
    it('Successfull Login', () => {
      loginPage.login(email, password);
    });

    it('Invalid Login', () => {
      loginPage.wrongLogin(testEmail, testPassword);
    });
});