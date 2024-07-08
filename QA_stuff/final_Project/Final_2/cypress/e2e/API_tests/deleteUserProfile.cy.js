describe('should successfully delete a user profile', () => {
    
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5N2FlNmJmNWE4ZTAwMTM3ODkzYWEiLCJpYXQiOjE3MjA0NjA0MDB9.qZtsN9drsdfgO1GNUy_P-f_h1oVXbHFKXrZFJFJ4RDk'

    it('deletes the Lois Griffin Profile', () => {
        cy.request({
            method: 'DELETE',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
            headers: {
                authorization: `Bearer ${authToken}`
            },
        }).then((response) => {
            cy.log('Response: ', JSON.stringify(response));
            expect(response.status).to.eq(200)
        })
    })
})