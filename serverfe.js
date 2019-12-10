const express = require('express');
const app = express();

app.use(express.static('./', {index: 'fe.html'}));

app.listen(8080, function () {
  console.log('be server is listening at port 8080');
});