/// <reference types="cypress" />
export default class FixedRate {
    // Methods
    fillContractName(name) {
        cy.get('input[name="name"]').should('be.enabled').type(name);
    }
  
    fillScopeOfWork(text) {
        cy.get('textarea[name="scope"]').should('be.enabled').type(text); 
    }

    selectDate() {
        cy.get('div[name="effectiveDate"]').click();
        cy.wait(2000);
        cy.get('abbr[aria-label="June 29, 2021"]').click();
    }

    clickNext() {
        cy.get('button[type="submit"]').should('be.enabled').click();
    }

    fillRate(rate) {
        cy.get('input[name="rate"]').should('be.enabled').type(rate);
    }

    selectCurrency(currency) {
        cy.get('div[data-qa="currency-select"] > div > div').type(currency).type('{enter}');
    }
    selectPer(per) {
        cy.get('div[data-qa=cycle-select] > div > div').type(per);
    }

    addSpecialClause(specialClause) {
        cy.get('div[data-qa="special-clause-card"] > div > div > button').should('be.enabled').click();
        cy.get('div[data-qa="special-clause-card"] > div > div > div > div > div > textarea').type(specialClause);
    }

    clickNextExtras() {
        cy.get('div[class="page-content text-center"] > div > div > button').click();
    }

    selectCountry(country) {
        cy.get('div[data-qa="contractor-tax-residence"] > div > div').click();
        cy.contains(country).trigger('click');
    }
    
    selectState(state) {
        cy.get('div[data-qa="contractor-tax-residence-province"] > div > div').click();
        cy.contains(state).trigger('click');
    }

    clickCreateContract() {
        cy.get('div[class="flex flex-dir-col compliance-form"] > div > button').click();
    }

    createFixedRate(name, text, rate, currency, per, specialClause, country, state) {
      this.fillContractName(name);
      this.fillScopeOfWork(text);
      this.selectDate();
      this.clickNext();
      this.fillRate(rate);
      this.selectCurrency(currency);
      this.selectPer(per);
      this.clickNext();
      this.clickNext();
      this.addSpecialClause(specialClause);
      this.clickNextExtras();
      this.selectCountry(country);
      this.selectState(state);
      this.clickCreateContract();
    }
  }