const axios = require('axios');
const environment = require('../config/environment');

class RoomAPI {
  async getRooms() {
    const response = await axios.get(`${environment.apiBaseUrl}/room`);
    return response.data;
  }
}

module.exports = RoomAPI;