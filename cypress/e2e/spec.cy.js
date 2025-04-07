import DonationPage from '../pages/DonationPage';

describe('Donation Process Flow', () => {
  const donationPage = new DonationPage();

  beforeEach(() => {
    // Arrange: Visit the donation page
    donationPage.visit();
  });

  it('should complete the donation process successfully', () => {
    // Arrange: Select donation level
    donationPage.selectDonationLevel();

    // Arrange: Fill out donor details
    donationPage.fillDonorDetails(
      'Nuruddin',
      'Kawsar',
      '01789689859',
      'nuruddinkawsar1995@gmail.com',
      '15/3 cute Goli, arambag, motijheel'
    );

    // Arrange: Stub geolocation
    donationPage.stubGeolocation(23.8103, 90.4125); // Dhaka coordinates

    // Assert: Verify navigation to the payment page
    donationPage.verifyPaymentPage();

    // Arrange: Fill out payment details
    donationPage.fillPaymentDetails(
      '4242424242424242',
      '1225',
      '123',
      'Nuruddin Kawsar',
      '123 Main Street, NY, USA'
    );

    // Act: Submit the payment
    donationPage.submitPayment();

    // Assert: Verify navigation to the confirmation page
    donationPage.verifyConfirmationPage();
  });
});