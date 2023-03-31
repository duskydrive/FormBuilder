describe('Register', () => {
  it('should disable submit btn if form is invalid', () => {
    cy.visit('/register');
    cy.url().should('includes', 'register');
    cy.get('[formControlName="username"]').type('Joe');
    cy.get('[formControlName="password"]').type('123123');
    cy.get(':button').should('be.disabled')
  });

  it('should enable submit btn if form is valid', () => {
    cy.visit('/register');
    cy.url().should('includes', 'register');
    cy.get('[formControlName="email"]').type('test@gmail.com');
    cy.get('[formControlName="username"]').type('Joe');
    cy.get('[formControlName="password"]').type('123123');
    cy.get(':button').should('not.be.disabled')
  });

  it('Should register if creds are valid and redirect to Login page', () => {
    cy.visit('/register');
    cy.url().should('includes', 'register');
    cy.intercept(`${Cypress.env('backendUrl')}/register`).as('waitForRegister')
    cy.get('[formControlName="email"]').type('test@gmail.com');
    cy.get('[formControlName="username"]').type('Joe');
    cy.get('[formControlName="password"]').type('123123');
    cy.get('#submitBtn').click()
    cy.wait('@waitForRegister')
    cy.visit('/');
    cy.url().should('equal', `${Cypress.config('baseUrl')}/login`)
  });
})

