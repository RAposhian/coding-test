const axios = require('axios');

module.exports = {
  getUsers: (request, response) => {
    axios.get('https://randomuser.me/api/')
      .then(res => {
        response.status(200).send(res.data)
      })
      .catch(error => response.status(500).send(error));
  }
};