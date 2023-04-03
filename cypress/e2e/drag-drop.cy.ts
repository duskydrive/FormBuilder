describe('Drag n Drop', () => {
  it('Should Drag and Drop', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.get('#doneList .items-box').should('have.length', 1)
  })

  it('Should Drag and Drop multiple elements', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.dragElement('.cdk-drag:contains("select")', '#doneList');
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.dragElement('.cdk-drag:contains("textarea")', '#doneList');
    cy.get('#doneList .items-box').should('have.length', 4)
  })
})
