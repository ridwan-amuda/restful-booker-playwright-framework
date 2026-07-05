const axios = require('axios');
const environment = require('../config/environment');

class AuthAPI {
  async login(username, password) {
    const response = await axios.post(`${environment.apiBaseUrl}/auth/login`, {
      username,
      password,
    });

    return response;
  }
}

module.exports = AuthAPI;