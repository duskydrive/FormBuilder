/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
import "cypress-real-events";

interface UserData {
  email: string, 
  password: string
}

declare global{
  namespace Cypress {
  interface Chainable<Subject = any> {
    login(userData: UserData): Chainable<any>;
    dragElement(draggable: string, dropTo: string): Chainable<any>;
    openFieldStyles(selector: string): Chainable<any>;
  }
}
}




Cypress.Commands.add('login', (userData: UserData) => { 
  cy.intercept(`${Cypress.env('backendUrl')}/login`).as('waitForLogin')
  cy.visit('/');
  cy.url().should('includes', 'login');
  cy.get('[formControlName="email"]').type(userData.email);
  cy.get('[formControlName="password"]').type(userData.password);
  cy.get('#submitBtn').click()
  cy.wait('@waitForLogin')
  cy.visit('/');
});

// CDK DragnDrop Cypress test works in all browsers except for firefox. Testing DragnDropCDK is pretty hard and this solution is the only one that worked for me, thanks for a cypress-real-events plugin.
Cypress.Commands.add('dragElement', (draggable: string, dropTo: string) => { 
  cy.get(draggable)
    .realMouseDown({ button: 'left', position: 'center' })
    .realMouseMove(0, 10, { position: 'center' });
  cy.get(dropTo ).realMouseMove(0, 0, { position: 'center' }).realMouseUp();
  // wait for animations to finish
  cy.wait(500)
});

Cypress.Commands.add('openFieldStyles', (selector: string) => { 
  cy.get(selector).should('have.length', 1);
  cy.get(selector).click();
  cy.get('#accordion-header-2')
    .invoke('attr', 'aria-expanded')
    .should('eq', 'true');
});


//
// NOTE: You can use it like so:
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
