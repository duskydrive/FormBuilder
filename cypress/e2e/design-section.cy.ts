const userCreds = {email: 'test@gmail.com', password: '123123'};

describe('Design Section', () => {
  it('Should have "Form General Styling" opened by default', () => {
    cy.login(userCreds);
    cy.get('#accordion-header-1')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true');
  })

  it('Should have "Field Styling" closed by default', () => {
    cy.login(userCreds);
    cy.get('#accordion-header-2')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'false');
  })

  it('Should change heading in DropSection when user types in Form Heading Input', () => {
    cy.login(userCreds);
    cy.get('#generalDesignHeading').clear().type('New heading');
    cy.get('#dropHeading').should('contain.text', 'New heading');
  })

  it('Should change border-width of form in DropSection when user types in Form Border Width Input', () => {
    cy.login(userCreds);
    cy.get('#generalDesignBorderWidth').clear().type('12');
    cy.get('#dropForm').should('have.css', 'border-width', '12px');
  })

  it('Should change border-color of form in DropSection when user types in Form Border Color Input', () => {
    cy.login(userCreds);
    cy.get('#generalDesignBorderColor')
      .click()
      .invoke('val', '#ff0000')
      .trigger('input')
      .blur()
    cy.get('#dropForm').should('have.css', 'border-color', '#ff0000');
  })
})