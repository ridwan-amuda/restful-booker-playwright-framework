const { Given, When, Then } = require('@cucumber/cucumber');
const AdminPage = require('../../pages/AdminPage');

Given('I am on the admin login page', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.open();
});

When('I login with invalid admin credentials', async function () {
  await this.adminPage.loginWithInvalidCredentials();
});

Then('I should see a login error message', async function () {
  await this.adminPage.verifyLoginErrorIsDisplayed();
});