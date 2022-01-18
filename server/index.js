const express = require('express'),
      userController = require('./controllers/getUsers'),
      port = 4545,
      app = express();

app.use(express.json());

app.get(`/api/get-users`, userController.getUsers);

app.listen(port, () =>  console.log(`Server is listening on port ${port}`));
