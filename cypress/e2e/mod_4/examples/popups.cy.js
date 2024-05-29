// intercept and handle the popup
cy.on('window:alert', (message) => {
    // perform actions based on the popup message
    cy.log('Popup message:', message);
    // Acceot the popup
    cy.on('window:confirm', () => true);
})
