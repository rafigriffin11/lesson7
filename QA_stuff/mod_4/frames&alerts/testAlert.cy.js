describe('Handling Alerts', () => {
    cy.visit('https://demoqa.com/alerts');

    it('navigates basic alert', () => {
        cy.get('#alertButton').then(($btn) => {
            if ($btn.hasClass('btn-primary')) {
                $btn.click();
                cy.on('window:alert', (alertText) => {
                    expect(alertText).to.contains('You clicked a button');
                })
            } else {
                cy.log('alert button is not clickable on the page')
            }
        })
    });

    it('navigates through timer alert', () => {
        cy.get('#timerAlertButton').then(($btn) => {
            if ($btn.hasClass('btn-primary')) {
                $btn.click();
                cy.on('window:alert', (timerAlertText) => {
                    expect(timerAlertText).to.contains('This alert appeared after 5 seconds');
                })
            } else {
                cy.log('alert button is not clickable on the page')
            }
        })
    });

    it('navigates confirm alert and clicks ok', () => {
        cy.get('#confirmButton').then(($btn) => {
            if ($btn.hasClass('btn-primary')) {
                $btn.click();
                cy.on('window:alert', (acceptConfirm) => {
                    expect(acceptConfirm).to.contains('Do you confirm action?');
                })
            } else {
                cy.log('alert button is not clickable on the page')
            }
        })
    });

    it('navigates confirm alert cancel', () => {
        cy.get('#confirmButton').then(($btn) => {
            if ($btn.hasClass('btn-primary')) {
                $btn.click();
                cy.on('window:confirm', () => false);
                cy.get('#confirmButton').click();
                cy.get('#confirmResult').should('have.text', 'cancel')
            } else {
                cy.log('alert button is not clickable on the page')
            }
        })
    });

    it('handles prompt alert', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Testing the prompt alert function');
            cy.get('#promtButton').click(); 
            cy.get('#promptResult').should('contain', 'Testing the prompt alert function');
        });
    });
})