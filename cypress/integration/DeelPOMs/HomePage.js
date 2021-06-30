/// <reference types="cypress" />
export default class HomePage {
    
    // Methods
    clickPopUpCloseButton() {
        cy.wait(1000);
        cy.get('div.fade.popup.new-feature-popup.modal.show > div > div > div > button').click();
    }
  }