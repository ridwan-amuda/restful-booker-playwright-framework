const { defineConfig, devices } = require('@playwright/test');
const environment = require('./config/environment');

module.exports = defineConfig({
  testDir: './tests',
  timeout: environment.defaultTimeout,
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: environment.baseUrl,
    headless: environment.headless,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],
  projects: [
    {
      name: environment.browser,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});