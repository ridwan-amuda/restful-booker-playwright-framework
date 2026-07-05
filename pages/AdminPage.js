const { expect } = require('@playwright/test');
const constants = require('../utils/constants');

class AdminPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"], input[type="text"]').first();
    this.passwordInput = page.locator('input[name="password"], input[type="password"]').first();

    this.loginButton = page.getByRole('button', {
      name: /login/i,
    });

    this.errorMessage = page.locator('.alert, .error, [role="alert"], .notification');
  }

  async open() {
    await this.page.goto(constants.routes.admin);
  }

  async loginWithInvalidCredentials() {
    await this.usernameInput.fill(constants.admin.invalidUsername);
    await this.passwordInput.fill(constants.admin.invalidPassword);
    await this.loginButton.click();
  }

  async verifyLoginErrorIsDisplayed() {
    await expect(this.errorMessage.first()).toBeVisible();
  }
}

module.exports = AdminPage;