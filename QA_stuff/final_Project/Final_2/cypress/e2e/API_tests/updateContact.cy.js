
describe('Update booking', () => {

    it('should retrieve a booking and partially update the information', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjAyMjQwNTl9.SpL6Wm9UcLWr7cKkfTDHBhe1vzb5VQx9cJt4BAkBj98'
        cy.request({
            method: 'PUT',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6685a66f78ba34001320a2cd',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: {
                "firstName": "John",
                "lastName": "Doe",
                "birthdate": "1970-01-01",
                "email": "jdoe@fake.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Wichita",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object').that.is.not.empty;
        });
    });


    it('should partially update contact info', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0MWUyNGExNDkxMDAwMTM4MzZkYjYiLCJpYXQiOjE3MjAyMjQwNTl9.SpL6Wm9UcLWr7cKkfTDHBhe1vzb5VQx9cJt4BAkBj98'
        const updatedInfo = {
            "street1": "18 York St.",
            "street2": "Apartment 420",
        };

        cy.request({
            method: 'PATCH',
            failOnStatusCode: false,
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6685a66f78ba34001320a2cd',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: updatedInfo
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object').that.is.not.empty;
        });

    })
});