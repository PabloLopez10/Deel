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
    let data;


    // Opens the browser in the login page before starting each of the tests on the suite.
    beforeEach(() => {
      cy.visit('https://app.letsdeel.com/login');
      cy.fixture('fixedRateData').then((frData) => {
        data = frData;
      });
    });
  
    it('Create Fixed Rate Contract', () => {
      loginPage.login(data.email, data.password);
      homePage.clickPopUpCloseButton();
      sideBar.clickCreateAContract();
      create.clickCreateFixedRate();
      fixedRate.createFixedRate(data.contractName, data.scope, data.rate, data.currency, data.per, data.specialClause, data.country, data.state);
    });
});