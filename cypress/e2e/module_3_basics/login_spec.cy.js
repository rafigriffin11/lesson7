// javascript

const validUsername = 'Rafigriffin11@email.com';
const validPassword = 'RafisPassword123';
const url = 'https://demo.applitools.com';

describe('applitool login test', () => {
    beforeEach(() => {
        cy.visit(url);
    });
    
    function login(username, password) {
        cy.get('#username').type(validUsername);
        cy.get('#password').type(validPassword);
        cy.contains('Submit').click();
        // cy.get('[data-cy=submit]').click()
    }

    describe('verifyLoginSuccess', () => {
        it('should login successfuly', () => {
            login(validUsername, validPassword);
            // cy.get('Total Balance').should('be.visible'); 
        })
    })

});

// using 'select' to choose an option from a dropdown
cy.get('select').select('option value');

//using 'invoke' to interact with a dropdown option
cy.get('select').invoke('val', 'option value');