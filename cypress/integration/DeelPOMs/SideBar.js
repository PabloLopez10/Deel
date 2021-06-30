/// <reference types="cypress" />
export default class SideBar {
    
    // Methods
    clickCreateAContract() {
        cy.get('ul>div').eq(1).click();
    }
  }