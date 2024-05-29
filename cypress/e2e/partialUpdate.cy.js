

let authToken
let bookingToUpdate




describe('Update booking', () => {




    it('should generate an auth token', () => {
        cy.request({
            method: "POST",
            url: 'https://restful-booker.herokuapp.com/auth',
            failOnStatusCode: false,
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




describe('Partial Booking Update', () => {
    it('should retrieve a booking and partially update the information', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/5',
            headers: {
                'Authorization': 'Bearer ${authToken}'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object').that.is.not.empty;
            bookingToUpdate = response.body[1];
            cy.log('Booking ID to update: ${bookingToUpdate}');
        });
    });




    it('should update a booking', () => {
        const partiallyUpdatedBooking = {
            'firstname': 'Joe',
            'lastname': 'Schmo',
        };




        cy.request({
            method: 'PATCH',
            url: 'https://restful-booker.herokuapp.com/booking/5',
            failOnStatusCode: false,
            headers: {
                'Authorization': 'Bearer ${authToken}',
                'Content-Type': 'application/json',
                'Cookie': 'token=abc123',
            },
            body: partiallyUpdatedBooking
        }).then((response) => {
            expect(response.status).to.eq(403);
            expect(response.body).to.have.length.greaterThan(0);
        })
    })
})
