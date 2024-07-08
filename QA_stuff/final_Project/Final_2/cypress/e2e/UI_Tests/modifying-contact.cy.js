const url = 'https://thinking-tester-contact-list.herokuapp.com/login'

describe('Contact page login test', () => {

    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
    })

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should add new contact', () => {
        cy.contains('Add a New Contact').click();
        cy.get('#firstName').type('Jane');
        cy.get('#lastName').type('Doe');
        cy.get('#birthdate').type('2001-01-01');
        cy.get('#email').type('janedoe@google.com');
        cy.get('#phone').type('2105551234');
        cy.get('#street1').type('49 W 2nd street');
        cy.get('#city').type('Denver');
        cy.get('#stateProvince').type('Colorado');
        cy.get('#postalCode').type('80223');
        cy.get('#country').type('USA');
        cy.get('#submit').click();
        cy.contains('td', 'Jane Doe').should('be.visible');
    });
    
    it('should view contact details', () => {
        cy.contains('td', 'Jane Doe').click()
        cy.url().should('include', '/contactDetails');
    });

    it('should edit existing contact', () => {
        const newAddress = '49 W 1st street'
        cy.contains('td', 'Jane Doe').click()
        cy.url().should('include', '/contactDetails');
        cy.get('#edit-contact').click();
        cy.get('#street1').clear()
        cy.get('#street1').type(newAddress);
        cy.contains('Submit').click();
        cy.get('#return').click()
        cy.contains('td', newAddress).should('be.visible')

    });

    it('should delete contact', () => {
        cy.contains('td', '49 W 2nd street').click();
        cy.get('#delete').click();
        cy.on('window:alert', (acceptConfirm) => {
            expect(acceptConfirm).to.contains('Are you sure you want to delete this contact?');
        })
    });



    
})