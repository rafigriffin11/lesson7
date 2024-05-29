cy.get('.username-input')
    .type('testuser')
    .get('password-input')
    .type('secretpassword')
    .get('.login-button')
    .click()
    .get('.welcome-message')
    .should('contain', 'Welcome, testuser!');