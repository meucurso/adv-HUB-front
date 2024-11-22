/// <reference types="cypress" />
// ***********************************************

declare namespace Cypress {
    interface Chainable<Subject = any> {
      getByData(seletor: string): Chainable<any>;
    }
  }
  
Cypress.config("defaultCommandTimeout", 200000);

Cypress.Commands.add("getByData", (seletor) => {
  return cy.get(`[data-testid=${seletor}]`);
});