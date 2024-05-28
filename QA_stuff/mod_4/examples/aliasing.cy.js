// to alias an element
cy.get('.element').as('aliasName');

// using alias later on in test
cy.get('@aliasName').click();