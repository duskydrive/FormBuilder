describe('Login', () => {
  it('should disable submit btn if form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('test@gmail.com');
    cy.get(':button').should('be.disabled')
  });

  it('should enable submit btn if form is valid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('test@gmail.com');
    cy.get('[formControlName="password"]').type('123123');
    cy.get(':button').should('not.be.disabled')
  });

  it('Should login if creds are valid', () => {
    cy.login(Cypress.env('userCreds'))
    cy.url().should('equal', `${Cypress.config('baseUrl')}/`)
  });

  it('Should not login if creds are invalid', () => {
    cy.login({email: 'test11@gmail.com', password: '123123'})
    cy.url().should('equal', `${Cypress.config('baseUrl')}/login`)
  });
})
