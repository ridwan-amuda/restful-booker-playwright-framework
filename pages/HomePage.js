const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    this.availabilityCheckerButton = page.getByRole('button', {
      name: /check availability/i,
    });

    this.dateInputs = page.locator('input');
    this.roomCards = page.locator('.room-card, .card, [data-testid*="room"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async verifyAvailabilityCheckerIsDisplayed() {
    await expect(this.availabilityCheckerButton).toBeVisible();
  }

  async searchAvailableRoomsWithValidDates() {
    const today = new Date();

    const checkInDate = new Date(today);
    checkInDate.setDate(today.getDate() + 2);

    const checkOutDate = new Date(today);
    checkOutDate.setDate(today.getDate() + 4);

    const formatDate = (date) => date.toISOString().split('T')[0];

    await this.dateInputs.nth(0).fill(formatDate(checkInDate));
    await this.dateInputs.nth(1).fill(formatDate(checkOutDate));
    await this.availabilityCheckerButton.click();
  }

  async verifyAvailableRoomsAreDisplayed() {
    await expect(this.roomCards.first()).toBeVisible();
  }
}

module.exports = HomePage;