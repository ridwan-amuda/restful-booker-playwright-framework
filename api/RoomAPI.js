const axios = require('axios');
const environment = require('../config/environment');

class RoomAPI {
  async getRooms() {
    const response = await axios.get(`${environment.apiBaseUrl}/room`);

    if (Array.isArray(response.data)) {
      return response.data;
    }

    if (Array.isArray(response.data.rooms)) {
      return response.data.rooms;
    }

    if (Array.isArray(response.data.room)) {
      return response.data.room;
    }

    throw new Error('Unexpected rooms API response format');
  }
}

module.exports = RoomAPI;