import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ReservationPage } from '../pages/reservation-page';
import bookingData from '../data/booking-data.json';

test('Booking a suite room for today', async ({ page }) => {
  const homePage = new HomePage(page);
  const reservationPage = new ReservationPage(page);

  await homePage.navigate();
  await homePage.selectSuiteRoom();

  await reservationPage.validateReservationDetails();
  await reservationPage.fillGuestForm(bookingData.validGuest);
  await reservationPage.confirmBooking();
});