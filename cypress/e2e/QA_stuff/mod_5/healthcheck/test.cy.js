describe("Data-Driven API Testing with Cypress", () => {
    const testData = [
      { firstName: "John", lastName: "Doe", totalprice: 100 },
      { firstName: "Sally", lastName: "Smith", totalprice: 150 },
      { firstName: "Micheal", lastName: "Johnson", totalprice: 200 }
    ];
    testData.forEach((data) => {
      it.only(`Updates booking for ${data.firstName}`, () => {
        cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/auth',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username: 'admin',
            password: 'password123'
          }
        }).then((authResponse) => {
          expect(authResponse.status).to.eq(200);
          expect(authResponse.body).to.have.property('token');
          const token = authResponse.body.token;
          cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': `token=${token}`
            },
            body: {
              firstname: data.firstName,
              lastname: data.lastName,
              totalprice: data.totalprice,
              depositpaid: true,
              bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
              },
              additionalneeds: "Breakfast"
            }
          }).then((updateResponse) => {
            expect(updateResponse.status).to.eq(200);
            console.log(`Booking updated successfully for ${data.firstName}`);
          });
        });
      });
    });
  });
  
  
  
  
  
  