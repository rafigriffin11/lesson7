// 1 - test for login functionality
// 2 - Add onesie to cart
// 3 - Navigate back to home page and add backpack to cart
// 4 - Go to cart and remove the onesie
// 5 - Checkout/type in address info

const url = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';
const firstName = 'Rafi';
const lastName = 'Griffin';
const zip = '80223';
const onesie = '#item_2_title_link.inventory_item_name';
const bag = '#item_4_title_link.inventory_item_name';

describe('SauceDemo login test', () => {
    function login(username, password) {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button.sumbit-button.btn_action').click();
    }
    it('should login with valid credentials', () => {
        cy.visit(url);
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.contains('#login-button.sumbit-button.btn_action').click();
        cy.url().should('include', '/inventory.html');
    });
    it('should add Sauce Labs Onesie to cart', () => { login('standard_user', 'secret_sauce');
        cy.get(onesie).click();
        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.contains('#.shopping_cart_badge').should('be.visible').and('contain', '1');
    });
    it('should add Sauce Labs Backpack to cart', () => {login('standard_user', 'secret_sauce');
        cy.get(bag).click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#.shopping_cart_badge').should('be.visible').and('contain', '2');
    });
    it('should remove Sauce Labs Onesie from cart', () => { login('standard_user', 'secret_sauce');
        cy.get('#shopping_cart_link').click();
        cy.get('Sauce Labs Onesie').parent().find('.btn_secondary').click();
        cy.contains('.shopping_cart_badge').should('be.visible').and('contain', '1');
    });
    it('should complete checkout process', () => {
        cy.get('#shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(zip);
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.contains('h2', 'Thank you for your order!').should('be.visible');
    })
});




