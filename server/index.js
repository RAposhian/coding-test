const express = require('express'),
      port = 4545,
      app = express();

app.use(express.json());

app.listen(port, () =>  console.log(`Server is listening on port ${port}`));
