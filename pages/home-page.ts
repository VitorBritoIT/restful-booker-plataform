import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly roomsNavButton: Locator;
  readonly singleRoomHeading: Locator;
  readonly doubleRoomHeading: Locator;
  readonly suiteRoomHeading: Locator;
  readonly bookNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomsNavButton = page.locator('#navbarNav').getByText('Rooms');
    this.singleRoomHeading = page.locator('//h5[text()="Single"]');
    this.doubleRoomHeading = page.locator('//h5[text()="Double"]');
    this.suiteRoomHeading = page.locator('//h5[text()="Suite"]');
    this.bookNowButton = page.locator('//a[@class="btn btn-primary" and text()="Book now"]').first();
  }

  async navigate() {
    await this.page.goto('https://automationintesting.online/');
    await expect(this.page).toHaveTitle('Restful-booker-platform demo');
  }

  async selectSingleRoom() {
    await this.roomsNavButton.click();
    await expect(this.singleRoomHeading).toBeVisible();
    await expect(this.bookNowButton).toBeVisible();
    await this.bookNowButton.click();
    await expect(this.page).toHaveURL(/.*reservation/);
  }

  async selectDoubleRoom() {
    await this.roomsNavButton.click();
    await expect(this.doubleRoomHeading).toBeVisible();
    await expect(this.bookNowButton).toBeVisible();
    await this.bookNowButton.click();
    await expect(this.page).toHaveURL(/.*reservation/);
  }
  
    async selectSuiteRoom() {
    await this.roomsNavButton.click();
    await expect(this.suiteRoomHeading).toBeVisible();
    await expect(this.bookNowButton).toBeVisible();
    await this.bookNowButton.click();
    await expect(this.page).toHaveURL(/.*reservation/);
  }
}