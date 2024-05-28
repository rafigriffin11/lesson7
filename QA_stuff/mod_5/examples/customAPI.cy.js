function getBookingById(bookingId) {

    return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/${bookingId}`);
  
  }
  
  describe("Custom Functions for API Testing with Cypress", () => {
  
    it("Retrieves booking details for a specific ID", () => {
  
      getBookingById(1).then((response) => {
  
        expect(response.status).to.eq(200);
  
        expect(response.body).to.have.property("bookingid", 1);
  
      });
  
    });
  
  });