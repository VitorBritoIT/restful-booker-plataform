import { Page, Locator, expect } from '@playwright/test';
import { GuestInfo } from '../interface/booking-interface';

export class ReservationPage {
  readonly page: Page;
  readonly accessibleBadge: Locator;
  readonly selectedEvent: Locator;
  readonly reserveNowButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly errorAlertBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accessibleBadge = page.locator('//span[contains(@class, "badge") and text()="Accessible"]');
    this.selectedEvent = page.locator('[class*="rbc-event-content"]').filter({ hasText: 'Selected' });
    this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });
    this.firstNameInput = page.locator('input[placeholder="Firstname"]');
    this.lastNameInput = page.locator('input[placeholder="Lastname"]');
    this.emailInput = page.locator('input[placeholder="Email"]');
    this.phoneInput = page.locator('input[placeholder="Phone"]');
    
  
    this.errorAlertBox = page.locator('.alert.alert-danger');
  }

  async validateReservationDetails() {
    await expect(this.accessibleBadge).toBeVisible();
    await expect(this.selectedEvent).toBeVisible();
  }

  async fillGuestForm(guest: GuestInfo) {
    await this.reserveNowButton.click();
    
    await expect(this.firstNameInput).toBeVisible();
    await this.firstNameInput.fill(guest.firstName);
    await this.lastNameInput.fill(guest.lastName);
    await this.emailInput.fill(guest.email);
    await this.phoneInput.fill(guest.phone);
  }

  async confirmBooking() {
    await this.reserveNowButton.click();
  }

  async expectErrorMessages(expectedMessages: string[]) {
    await expect(this.errorAlertBox).toBeVisible();
    for (const msg of expectedMessages) {
      await expect(this.errorAlertBox).toContainText(msg);
    }
  }
}