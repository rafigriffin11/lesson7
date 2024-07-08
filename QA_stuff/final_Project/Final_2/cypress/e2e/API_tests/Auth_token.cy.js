function testAuthToken(token) {
    describe('Authentication Token', () => {

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjAyMjQwNTl9.SpL6Wm9UcLWr7cKkfTDHBhe1vzb5VQx9cJt4BAkBj98'
        it('Bearer Token Auth', () => {
    
            cy.request(
    
                {
                    method: 'GET',
                    url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            )
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
}

module.exports = testAuthToken;