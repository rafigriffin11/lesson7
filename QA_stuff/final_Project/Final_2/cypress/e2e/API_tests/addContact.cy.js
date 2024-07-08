describe('Create new contact', () => {

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should create a new contact', () => {
        const newContact = {
            'firstName': 'Jimothy',
            'lastName': 'Doe',
            'birthdate': '2001-01-01',
            'email': 'janedoe@google.com',
            'phone': '2105551234',
            'street1': '555 wewatta st.',
            'city': 'Denver',
            'stateProvince': 'Colorado',
            'postalCode': '80223',
            'country': 'USA',
        };

        // create Auth token
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjAyMjQwNTl9.SpL6Wm9UcLWr7cKkfTDHBhe1vzb5VQx9cJt4BAkBj98'
        cy.request(
            {
                method: 'POST',
                url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
                failOnStatusCode: false,
                headers: {
                    Authorization: 'Bearer ' + token
                },
                body: newContact
                
            }
        )

            .should((response) => {
  
                expect(response.status).to.eq(201);
                expect(response.body).to.be.an('object').that.is.not.empty;
            });

    });
});