const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../pages/HomePage');

Given('I am on the B&B homepage', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.open();
});

Then('I should see the Availability Checker', async function () {
  await this.homePage.verifyAvailabilityCheckerIsDisplayed();
});

When('I search for rooms using valid dates', async function () {
  await this.homePage.searchAvailableRoomsWithValidDates();
});

Then('I should see available rooms for booking', async function () {
  await this.homePage.verifyAvailableRoomsAreDisplayed();
});