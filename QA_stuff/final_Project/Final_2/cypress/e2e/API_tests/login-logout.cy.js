describe('Login and logout', () => {

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5N2FlNmJmNWE4ZTAwMTM3ODkzYWEiLCJpYXQiOjE3MjA0NTg0OTJ9.HdPdvZKI_C4oKWobajc9O4d7kPKrWM2Zwr31kJN650I'
    it('should login the user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
            body: {
                "email": "l.griffin@fake.com",
                "password": "familyGuy69"
            }
        }).then((response) => {
            cy.log('Response:', JSON.stringify(response));
            expect(response.status).to.eq(200)
        })
    })

    it('should logout of the users account', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) => {
            cy.log('Response:', JSON.stringify(response));
            expect(response.status).to.eq(200)
        })
    })

})