describe('Ping - Healthcheck', () => {
    it('should return true', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/apidoc/index.html#api-Ping-Ping')
            .should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.length.greaterThan(0);
            });
    });
});