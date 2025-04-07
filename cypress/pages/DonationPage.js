import 'cypress-iframe';
class DonationPage {
  visit() {
    cy.visit('https://tooba-web.myababil.com/f/donation-by-levels');
  }

  selectDonationLevel() {
    cy.contains('button[type="button"]', 'Select').first().click();
    cy.contains('button', 'Proceed Next').click();
  }

  fillDonorDetails(firstName, lastName, phone, email, address) {
    cy.get('[id=":r0:"]').type(firstName);
    cy.get('[id=":r1:"]').type(lastName);
    cy.get('.MuiSelect-select').click();
    cy.get('[data-value="Bangladesh"] > .DialCode').click();
    cy.get('[id=":r3:"]').type(phone);
    cy.get('[id=":r4:"]').type(email);
    cy.get('.css-g1kie').type(address);
    cy.get('#react-select-2-option-0').should('be.visible').click();
    cy.contains('button', 'Proceed Next').should('be.visible').click();
  }

  stubGeolocation(latitude, longitude) {
    cy.window().then((win) => {
      const mockGeolocation = {
        getCurrentPosition: (cb) => {
          cb({
            coords: {
              latitude,
              longitude,
              accuracy: 100,
            },
          });
        },
        watchPosition: () => { },
        clearWatch: () => { },
      };
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(mockGeolocation.getCurrentPosition);
      cy.stub(win.navigator.geolocation, 'watchPosition').callsFake(mockGeolocation.watchPosition);
      cy.stub(win.navigator.geolocation, 'clearWatch').callsFake(mockGeolocation.clearWatch);
    });
  }

  verifyPaymentPage() {
    cy.url().should('include', 'card-edit');
    cy.get('form#payment-form').should('be.visible');
  }

  fillPaymentDetails(cardNumber, expiry, cvc, fullName, billingAddress) {
    cy.get('.__PrivateStripeElement > iframe').should('have.length', 1);
    cy.frameLoaded('.__PrivateStripeElement > iframe');
    cy.iframe('.__PrivateStripeElement > iframe').find('#Field-numberInput').type(cardNumber, { delay: 50 });
    cy.iframe('.__PrivateStripeElement > iframe').find('#Field-expiryInput').type(expiry, { delay: 50 });
    cy.iframe('.__PrivateStripeElement > iframe').find('#Field-cvcInput').type(cvc, { delay: 50 });
    cy.get('input[placeholder="Full name on card"]').type(fullName);
    cy.get('#react-select-3-input').type(`${billingAddress}{enter}`);
    cy.get('#react-select-3-option-0').should('be.visible').click();
  }

  submitPayment() {
    cy.contains('button', 'Pay $100.00').click();
  }

  verifyConfirmationPage() {
    cy.url().should('include', 'confirmation');
  }
}

export default DonationPage;