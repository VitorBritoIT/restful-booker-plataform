import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ReservationPage } from '../pages/reservation-page';
import bookingData from '../data/booking-data.json';

test.describe('Booking a single room for today with incorrect data', () => {

  test('Should show error messages when submitting empty form', async ({ page }) => {
    const homePage = new HomePage(page);
    const reservationPage = new ReservationPage(page);

    await homePage.navigate();
    await homePage.selectSingleRoom();
    await reservationPage.validateReservationDetails();

    await reservationPage.fillGuestForm(bookingData.invalidGuestBadFormat);
    await reservationPage.confirmBooking();

    await reservationPage.expectErrorMessages([
      'must be a well-formed email address',
      'size must be between'
    ]);
  });

});