const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const environment = require('../config/environment');

setDefaultTimeout(environment.defaultTimeout);

Before(async function () {
  const browsers = {
    chromium,
    firefox,
    webkit,
  };

  this.browser = await browsers[environment.browser].launch({
    headless: environment.headless,
  });

  this.context = await this.browser.newContext({
    baseURL: environment.baseUrl,
    viewport: { width: 1280, height: 720 },
  });

  this.page = await this.context.newPage();
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }
});