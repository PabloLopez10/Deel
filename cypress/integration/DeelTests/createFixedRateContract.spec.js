///<reference types="cypress" />
import LoginPage from "../DeelPOMs/LoginPage";
import SideBar from "../DeelPOMs/SideBar";
import HomePage from "../DeelPOMs/HomePage"
import Create from "../DeelPOMs/Create"
import FixedRate from "../DeelPOMs/FixedRate"


describe('Contracts', () => {
    const loginPage = new LoginPage();
    const sideBar = new SideBar();
    const homePage = new HomePage();
    const create = new Create();
    const fixedRate = new FixedRate();

    let email = 'pj9lopez@hotmail.com';
    let password = 'Pablodeeltest1*';
    let contractName = "Pablo's Contract";
    let scope = "This is a test";
    let rate = "1000";
    let currency = "GBP - British Pound";
    let per = "Week"; 
    let specialClause = "Special Clause:  this is a test";
    let country = "United States";
    let state = "Colorado"

    // Opens the browser in the login page before starting each of the tests on the suite.
    beforeEach(() => {
      cy.visit('https://app.letsdeel.com/login')
    });
  
    it('Create Fixed Rate Contract', () => {
      loginPage.login(email, password);
      //homePage.clickPopUpCloseButton();
      sideBar.clickCreateAContract();
      create.clickCreateFixedRate();
      fixedRate.createFixedRate(contractName, scope, rate, currency, per, specialClause, country, state);
    });
});