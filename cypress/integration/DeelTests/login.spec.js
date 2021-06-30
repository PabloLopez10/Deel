///<reference types="cypress" />
import LoginPage from "../DeelPOMs/LoginPage.js";

describe('Login', () => {
    const loginPage = new LoginPage();
    let user;

    // Opens the browser in the login page before starting each of the tests on the suite.
    beforeEach(() => {
      cy.visit('https://app.letsdeel.com/login');
      cy.fixture('loginData').then((data) => {
        user = data;
      });
    });
  
    it('Successfull Login', () => {
      loginPage.login(user.email, user.password);
    });

    it('Invalid Login', () => {
      loginPage.wrongLogin(user.wrongEmail, user.wrongPassword);
    });
});