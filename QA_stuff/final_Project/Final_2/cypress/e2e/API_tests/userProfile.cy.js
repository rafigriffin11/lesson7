describe('Retrieve and update a user profile', () => {

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5N2FlNmJmNWE4ZTAwMTM3ODkzYWEiLCJpYXQiOjE3MjA0NTcyNDN9.3AO_sum2nPd5kMOtfiR5RP-Ld29DEciSC9wHeBp1aZ8'

        it('should retrieve user information', () => {
            cy.request({
                method: "GET",
                failOnStatusCode: false,
                url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
    
            }).then((response) => {
                cy.log('Response:', JSON.stringify(response));
                expect(response.status).to.eq(200);
            })
        });

        it('should update a user profile', () => {
            cy.request({
                method: 'PATCH',
                failOnStatusCode: false,
                url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                body: {
                    "firstName": "Lois",
                    "lastName": "Griffin III",
                    "email": "l.griffin@fake.com",
                    "password": "familyGuy69"
                }
            }).then((response) => {
                cy.log('Response:', JSON.stringify(response));
                expect(response.status).to.eq(200);
            })
        })
})