// cypress/e2e/api-tests.cy.js

describe('API Testing with Cypress', () => {

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should retrieve all booking IDs', () => {
  
      cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/contactList')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });
