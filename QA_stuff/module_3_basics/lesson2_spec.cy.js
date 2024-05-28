describe('Example Cypress Tests', () => {
  // beforeEach(() => {
  //     cy.visit('https://example.cypress.io/');
  // });

  it('should verify that the h1 header is visible', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('h1').should('have.text', 'Kitchen Sink');
  });

  it('Click querying link and click button on page', () => {
    cy.visit('https://example.cypress.io/');
    cy.contains('Querying').click();
    cy.get('.query-btn').should('contain', 'Button').click();
  });

  it('should click on actions link and type in valid email address', () => {
    cy.visit('https://example.cypress.io/');
    cy.contains('Actions').click();
    cy.get('#email1').type('example@email.com').should('have.value', 'example@email.com')
  });

  it('should click actions link and check off checkbox1', () => {
    cy.visit('https://example.cypress.io/');
    cy.contains('Actions').click();
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
    .check(['checkbox1']).should('be.checked')
  });

});