require('dotenv').config();

const environment = {
  baseUrl: process.env.BASE_URL || 'https://automationintesting.online',
  apiBaseUrl: process.env.API_BASE_URL || 'https://automationintesting.online/api',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS === 'true',
  defaultTimeout: Number(process.env.DEFAULT_TIMEOUT) || 30000,
};

module.exports = environment;