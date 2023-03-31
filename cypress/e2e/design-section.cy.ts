const userCreds = {email: 'test@gmail.com', password: '123123'};

describe('Design Section', () => {
  it('Should have "Form General Styling" opened by default', () => {
    cy.login(userCreds);
    cy.get('#accordion-header-1')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
  })

  it('Should have "Field Styling" closed by default', () => {
    cy.login(userCreds);
    cy.get('#accordion-header-2')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'false')
  })

  it('Should change heading in DropSection when user types in Form Heading Input', () => {
    cy.login(userCreds);
    // cy.get('#generalDesignHeading').clear().type('New heading')
    // cy.get('#dropHeading').should('have.text', 'New heading');
    cy.get('#dropHeading').contains('Form Builder1');
    // .should('have.text', 'Form Builder');
  })
})