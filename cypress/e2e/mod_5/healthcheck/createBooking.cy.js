describe('Create booking', () => {
    it('should create a new booking', () => {
        // "bookingid": 7952,
        const newBooking = {
            'firstname': 'Rafi',
            'lastname': 'Griffin',
            'totalprice': 420,
            'depositpaid': 'true',
            'bookingdates': {
                'checkin': '2024-11-03',
                'checkout': '2024-11-06',
            },
            'additionalneeds': 'breakfast',
        };

        cy.request('POST', 'https://restful-booker.herokuapp.com/booking', newBooking)
  
            .should((response) => {
  
                expect(response.status).to.eq(200);
            });

    });
})