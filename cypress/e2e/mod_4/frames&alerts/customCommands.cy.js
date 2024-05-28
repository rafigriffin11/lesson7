// click on a link using the label when no attribute is available

//first, add the following custom command to cypress > support > commands

// Cypress.Command.add('clickLink', (label) => {
//     cy.get('a').contains(label).click();
// })

describe('Custom Commands', () => {

    it.only('handles links', () => {

        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Apple MacBook Pro 13-inch')

    })

})