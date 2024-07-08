describe('Delete an entire contact', () => {

    it('Should successfully delete a contact', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjAyNzg1MDB9.bw7xDrZzl-IEhH4XksKWHa3k6Ixai5A8yrtk6aoXuBE'

        cy.request({
            
            method: 'DELETE',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6685d8b25f1f3a0013e946b9',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })

})