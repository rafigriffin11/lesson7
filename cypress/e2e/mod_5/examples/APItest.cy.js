// cypress/e2e/api-tests.cy.js

describe('API Testing with Cypress', () => {

    it('should retrieve all booking IDs', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });


