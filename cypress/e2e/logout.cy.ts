describe('Logout', () => {
  it('should logout when click on exitApp()', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#logoutBtn').click();
    cy.url().should('includes', 'login');
  });

})
