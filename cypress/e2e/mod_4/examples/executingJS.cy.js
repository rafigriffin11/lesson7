cy.get('.element').then(($el) => {
    // Execute JS using Cypress commands and the JQuery context
    cy.wrap($el).invoke('text').then((text) => {
        // perform assertions or other actions based on the text
        expect(text.trim()).to.eq('Expected Text');
    });
});


