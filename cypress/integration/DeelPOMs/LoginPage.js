/// <reference types="cypress" />
export default class LoginPage {

    // Methods
    acceptAllCookies() {
        cy.wait(2000);
        cy.get('body').then((body) => {
            if(body.find('#CybotCookiebotDialogBodyButtonAccept').length > 0)
            cy.get('#CybotCookiebotDialogBodyButtonAccept').click();
        })
    }

    fillEmail(email) {
        cy.get('input[name="email"]').should('be.enabled').type(email);
    }
  
    fillPassword(pass) {
        cy.get('input[name="password"]').should('be.enabled').type(pass); 
    }
  
    submit() {
        cy.get('button[type="submit"]').click();
    }
  
    login(email, pass) {
        this.acceptAllCookies();
        this.fillEmail(email);
        this.fillPassword(pass);
        this.submit();
    }

    wrongLogin(email, pass) {
        this.acceptAllCookies();
        this.fillEmail(email);
        this.fillPassword(pass);
        this.submit();
        cy.get('div[class="input-container"] p.input-container-error:contains("Invalid email address")').should('be.visible')
        cy.get('div[class="input-container"] p.input-container-error:contains("Invalid password")').should('be.visible')

    }
  }