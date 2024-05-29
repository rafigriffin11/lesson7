describe('SauceDemo Login and Add to Cart Test', () => {
    const url = 'https://www.saucedemo.com/';
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        cy.visit(url);
    });

    it('should login successfully and add the backpack to cart', () => {
        // Login
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.contains('Login').click();

        // Verify successful login
        cy.url().should('include', '/inventory.html');

        // Add backpack to cart
        cy.contains('Sauce Labs Backpack').click();
        cy.contains('Add to cart').click();

        // Verify item added to cart
        cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1');
    });
});
