describe('Field Styling', () => {  
  it('Should have "Field Styling" closed by default', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#accordion-header-2')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'false');
  })

  it('Should open "Field Styling" onclick', () => {
    cy.login(Cypress.env('userCreds'));
    cy.get('#accordion-header-2')
      .click()
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true');
  })

  it('Should active Fields Styling in Section1 after click at dropped element in Section2', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
  }) 

  it('Should change placeholder in Section2 after type in fieldPlaceholder Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldPlaceholder').clear().type('New value');
    cy.get('#doneList .items-box input')
      .should('have.attr', 'placeholder')
      .and('equal', 'New value')
  })

  it('Should change width in Section2 after type in fieldWidthInput', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("checkbox")', '#doneList');
    cy.openFieldStyles('#doneList .items-box label');
    cy.get('#fieldWidth').clear().type('80');    
    cy.get('#doneList .items-box input').invoke('css', 'width').should('match', /80*px/) 
  })

  it('Should change height in Section2 after type in fieldHeightInput', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldHeight').clear().type('45');    
    cy.get('#doneList .items-box input').invoke('css', 'height').should('match', /45*px/) 
  })

  it('Should mark element as required in Section2 after checkin fieldRequired Checkbox', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldRequired').click();
    cy.get('#doneList .items-box input')
      .should('have.attr', 'required');
  })

  it('Should change border-width of input in DropSection when user types value in fieldBorderWidth Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldBorderWidth').clear().type('5')
    cy.get('#doneList .items-box input').should('have.css', 'border-width', '5px');
  })

  it('Should change border-color of input in DropSection when user changes value in fieldBorderColor Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldBorderColor')
      .invoke('val', 'rgb(0, 0, 0)')
      .trigger('change')
    cy.get('#doneList .items-box input').should('have.css', 'border-color', 'rgb(0, 0, 0)');
  })

  it('Should change border-style of input in DropSection when user picks value in fieldBorderStyle Select', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldBorderStyle')
      .invoke('val', 'dashed')
      .trigger('change')
    cy.get('#doneList .items-box input').should('have.css', 'border-style', 'dashed');
  })

  it('Should change font-size of input in DropSection when user types value in fieldFontSize Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldFontSize').clear().type('30')
    cy.get('#doneList .items-box input').should('have.css', 'font-size', '30px');
  })

  it('Should change font-weight of input in DropSection when user picks value in fieldFontWeight Select', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldFontWeight')
      .invoke('val', '600')
      .trigger('change')
    cy.get('#doneList .items-box input').should('have.css', 'font-weight', '600');
  })

  it('Should change color of input in DropSection when user changes value in fieldColor Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldColor')
      .invoke('val', '#FF0000')
      .trigger('change')
    cy.get('#doneList .items-box input').should('have.css', 'color', 'rgb(255, 0, 0)');
  })

  it('Should change text of button in DropSection when user types value in fieldPlaceholder Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("button")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldPlaceholder').clear().type('New value')
    cy.get('#doneList .items-box button').should('contain', 'New value');
  })

  it('Should change bg color of button in DropSection when user changes value in fieldBackgroundColor Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("button")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldBackgroundColor')
      .invoke('val', '#FF0000')
      .trigger('change')
    cy.get('#doneList .items-box button').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  })

  it('Should add option in select in DropSection when user types value in fieldAddOption Input', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("select")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldAddOption').clear().type('New option');
    cy.get('#btnAddOption').click();
    cy.get('#doneList .items-box select').find(':selected').contains('New option');
  })

  it('Should remove option in select in DropSection when user clicks removeOption', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("select")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#fieldAddOption').clear().type('New option');
    cy.get('#btnAddOption').click();
    cy.get('#doneList .items-box select').find(':selected').contains('New option');
    cy.get('#btnRemoveOption').click();
    cy.get('#doneList .items-box select').find(':selected').contains('Select your option');
  })

  it('Should remove form element when user clicks on removeElement btn', () => {
    cy.login(Cypress.env('userCreds'));
    cy.dragElement('.cdk-drag:contains("input")', '#doneList');
    cy.openFieldStyles('#doneList .items-box');
    cy.get('#removeElement').click();
    cy.get('#doneList .items-box').should('not.exist');
  })
  
})
