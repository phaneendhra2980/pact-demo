const axios = require('axios');

module.exports = async function getUser() {
  const response = await axios.get('http://localhost:1234/users');
  return response.data;
};