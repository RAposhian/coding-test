const axios = require('axios');

module.exports = {
  getUsers: (request, response) => {
    //array to put the results into for returning to the frontend
    let usersArr = [];
    axios.get('https://randomuser.me/api/?results=3500')
      .then(res => {
        usersArr = res.data.results;
        
        axios.get('https://randomuser.me/api/?results=3500')
        .then(r => {
          //adding the second set of people to the frontend to take the total to 7000
            usersArr = [...usersArr, ...r.data.results];
            response.status(200).send(usersArr);
          })
      })
      .catch(error => response.status(500).send(error));
  }
};