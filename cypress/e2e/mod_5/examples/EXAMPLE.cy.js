describe('Authentication test', () => {
    it('should generate an auth token', () => {
        cy.request({
            method: "POST",
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                'username': 'admin',
                'password': 'password123',
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            const authToken = response.body.token;
            cy.log('Auth token: ${authToken}');
        });
    });
});