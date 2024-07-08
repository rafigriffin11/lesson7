describe('Contact page login test', () => {

    it('should NOT login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.get('#error').should('be.visible').and('contain', 'Incorrect username or password');
    })

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    })

    it('should logout', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.get('#logout').click();
        cy.get('h1').should('have.text', 'Contact List App');
    })
})