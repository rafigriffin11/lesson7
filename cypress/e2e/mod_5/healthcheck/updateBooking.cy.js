
let bookingToUpdate
let authToken


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
            authToken = response.body.token;
            cy.log(`Auth token: ${authToken}`);
        });
    });
});


describe('Booking Update', () => {
    it('should retrieve a booking and update the information', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/9',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object').that.is.not.empty;
            bookingToUpdate = response.body[0];
            cy.log(`Booking ID to update: ${bookingToUpdate}`);
        });
    });


    it('should update a booking', () => {
        const updatedBooking = {
            'firstname': 'Rafi',
            'lastname': 'Griffin',
            'totalprice': '710',
            'depositpaid': 'false',
            'bookingdates': {
                'checkin': '2025-11-03',
                'checkout': '2025-11-06',
            },
            'additionalneeds': 'breakfast & lunch',
        };


        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/9',
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
                'cookie': 'token=abc123',
            },
            body: updatedBooking
        }).then((response) => {
            expect(response.status).to.eq(403);
            expect(response.body).to.have.length.greaterThan(0);
        });
    });
});




