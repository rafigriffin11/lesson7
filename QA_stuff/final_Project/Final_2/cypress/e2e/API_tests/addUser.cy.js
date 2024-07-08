describe('User Profile', () => {

    it('Should create a new user profile', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5N2FlNmJmNWE4ZTAwMTM3ODkzYWEiLCJpYXQiOjE3MjA0NTcyNDN9.3AO_sum2nPd5kMOtfiR5RP-Ld29DEciSC9wHeBp1aZ8'

        const newUser = {
            "firstName": "Lois",
            "lastName": "Griffin",
            "email": "l.griffin@fake.com",
            "password": "familyGuy69"
        }

        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            body: newUser,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) => {
            cy.log('Response:', JSON.stringify(response));
            expect(response.status).to.eq(201);
        })
    })
    


})
