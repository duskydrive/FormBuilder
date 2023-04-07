describe('Form General Styling', () => {
  it('Should have "Form General Styling" opened by default', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#accordion-header-1')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true');
  })

  it('Should change heading in DropSection when user types in Form Heading Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignHeading').clear().type('New heading');
    cy.get('#dropHeading').should('contain.text', 'New heading');
  })

  it('Should change border-width of form in DropSection when user types in Form Border Width Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignBorderWidth').clear().type('12');
    cy.get('#dropForm').should('have.css', 'border-width', '12px');
  })

  it.only('Should change border-color of form in DropSection when user types in Form Border Color Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignBorderColor')
      .invoke('val', '#ff0000')
      .trigger('change')

    cy.get('#dropForm').should('have.css', 'border-color', 'rgb(255, 0, 0)');
  })

  it('Should change border-style of form in DropSection when user change option in Form Border Style Select', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignBorderStyle')
      .invoke('val', 'dashed')
      .trigger('change')
    cy.get('#dropForm').should('have.css', 'border-style', 'dashed');
  })

  it('Should change font-size of heading in DropSection when user types in Form Font Size Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignFontSize').clear().type('27');
    cy.get('#dropHeading').should('have.css', 'font-size', '27px');
  })

  it('Should change font-weight of heading in DropSection when user picks option in Form Font Weight Select', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignFontWeight')
      .invoke('val', '600')
      .trigger('change')
    cy.get('#dropHeading').should('have.css', 'font-weight', '600');
  })

  it('Should change color of heading in DropSection when user types in Form Color Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignColor')
      .invoke('val', '#FF0000')
      .trigger('change')
    cy.get('#dropHeading').should('have.css', 'color', 'rgb(255, 0, 0)');
  })

  it('Should change BG of DropSection Form when user types in Form BackgroundColor Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#generalDesignBackgroundColor')
      .invoke('val', '#FF0000')
      .trigger('change')
    cy.get('#dropForm').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  })
  
})
