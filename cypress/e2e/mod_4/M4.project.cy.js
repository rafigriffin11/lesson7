describe('Handling Alerts', () => {


    it('should display main page', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
   
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://demoqa.com/alerts')
        cy.get('h1').should('have.text', 'Alerts');
    });


    it('navigates basic alert', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.ClickMe('#alertButton')
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.contains('You clicked a button');
            })
    });


    it('navigates timer alert', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.ClickMe('#timerAlertButton')
        cy.on('window:alert', (timerAlertText) => {
            expect(timerAlertText).to.contains('This alert appeared after 5 seconds');
            })
    });


    it('navigates confirm alert and clicks ok', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.ClickMe('#confirmButton')
            cy.on('window:alert', (acceptConfirm) => {
                expect(acceptConfirm).to.contains('Do you confirm action?');
            })
    });


    it('navigates confirm alert cancel', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.ClickMe('#confirmButton')
        cy.on('window:confirm', () => false);
        cy.get('#confirmButton').click();
        cy.get('#confirmResult').should('have.text', 'You selected Cancel');
    });


    it('handles prompt alert', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Testing the prompt alert function');
            cy.get('#promtButton').click();
            cy.get('#promptResult').should('contain', 'Testing the prompt alert function');
        });
    });
   
});




// Cypress.Commands.add('ClickMe', (buttonId) => {
//     cy.get(buttonId).then(($btn) => {
//         if ($btn.hasClass('btn-primary')) {
//             $btn.click();
//         } else {
//             cy.log('alert button is not clickable on the page');
//         }
//     })
// })




