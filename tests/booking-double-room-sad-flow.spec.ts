import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ReservationPage } from '../pages/reservation-page';
import bookingData from '../data/booking-data.json';

test.describe('Booking a double room for today with incorrect data', () => {

  test('Should show error messages when submitting empty form', async ({ page }) => {
    const homePage = new HomePage(page);
    const reservationPage = new ReservationPage(page);

    await homePage.navigate();
    await homePage.selectDoubleRoom();
    await reservationPage.validateReservationDetails();

    await reservationPage.fillGuestForm(bookingData.invalidGuestEmptyFields);
    await reservationPage.confirmBooking();

    await reservationPage.expectErrorMessages([
      'Firstname should not be blank',
      'Lastname should not be blank',
      'must not be empty',
      'size must be between'
    ]);
  });
});