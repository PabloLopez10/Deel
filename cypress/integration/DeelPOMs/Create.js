/// <reference types="cypress" />
export default class Create {
    
    // Methods
    clickCreateFixedRate() {
        cy.get('div > h4:contains("Fixed Rate")').click();
    }
  }