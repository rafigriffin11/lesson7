// get the value of a cookie
cy.getCookie('cookieName').then((cookie) => {
    cy.log('cookie value:', cookie.value);
});

// set a new cookie
cy.setCookie('cookieName', 'cookieValue');

// delete a cookie
cy.clearCookie('cookieName');



