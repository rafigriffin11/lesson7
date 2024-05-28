const url = 'https://www.nomadakitchen.com/'

describe('Nomada site test', () => {
    it('navigates to site', () => {
    cy.visit(url);
    cy.get('.close-icon');
    cy.contains('.site-content').should('be.visible')
    })

    it('completes an online order', () => {
        cy.visit(url)
        cy.get('#sf-floating-button').click();
    })

});

