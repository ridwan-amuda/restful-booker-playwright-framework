const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const RoomAPI = require('../../api/RoomAPI');

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

Then('available rooms should be displayed', async function () {
  await this.homePage.verifyAvailableRoomsAreDisplayed();
});

Then('the availability results should be validated against the API', async function () {
 const roomAPI = new RoomAPI();

  const apiRooms = await roomAPI.getRooms();

  expect(apiRooms).toBeTruthy();
  expect(Array.isArray(apiRooms)).toBe(true);
  expect(apiRooms.length).toBeGreaterThan(0);
});