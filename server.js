const express = require('express');
const app = express();
const cors = require('cors');

const corsOpt =  {origin: 'http://127.0.0.1:8080', credentials: true};
app.use(cors(corsOpt));

app.get('/simpleajax', function (req, res, next) {
  res.send('simpleajax').end();
})
app.get('/notsimpleajax', function (req, res, next) {
  res.send('notsimpleajax').end();
})
app.get('/addcookie', function (req, res, next) {
  res.set({
    'Set-Cookie': 'name=zhiguang',
  });
  res.send('').end();
})
app.get('/withcookie',  function (req, res, next) {
  res.send(req.headers.cookie).end();
})
app.listen(3000, function () {
  console.log('be server is listening at port 3000');
});