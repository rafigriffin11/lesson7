describe('retrieve a single contact', ()=> {

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjA0NjA5MzR9.k8s_RYc0DXAzs-DAgL4-uFGO7gR6JwUnBSdD0W4C2TQ'
    it('should retrieve a specific contact', () => {
        cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/66844818d1550d00134f5bbc',
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) => {
            cy.log('response: ', JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object')
            expect(response.body.firstName).to.eq('gob')
        })
    })
})