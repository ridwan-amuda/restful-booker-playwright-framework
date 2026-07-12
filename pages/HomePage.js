const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.checkAvailabilityButton = page.getByRole('button', { name: /check availability/i });
    this.checkInInput = page.locator('input').nth(0);
    this.checkOutInput = page.locator('input').nth(1);
    this.roomCards = page.locator('div').filter({ hasText: /£|per night|Book/i });
    this.roomNames = page.locator('.room-card h3, .card h3, [data-testid*="room"] h3');
  }

  async open() {
    await this.page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  }

  async verifyAvailabilityCheckerIsDisplayed() {
    await expect(this.checkAvailabilityButton).toBeVisible();
  }

  async searchAvailableRoomsWithValidDates() {
    const today = new Date();
    const checkIn = new Date(today);
    checkIn.setDate(today.getDate() + 2);
    const checkOut = new Date(today);
    checkOut.setDate(today.getDate() + 4);
    const formatDate = (date) => date.toISOString().split('T')[0];

    await this.checkInInput.fill(formatDate(checkIn));
    await this.checkOutInput.fill(formatDate(checkOut));
    await this.checkAvailabilityButton.click();
    
  }

  async verifyAvailableRoomsAreDisplayed() {
    await expect(this.roomCards.first()).toBeVisible({ timeout: 10000 });
  }



}

module.exports = HomePage;