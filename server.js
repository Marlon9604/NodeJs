const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
const port = process.env.port || 8080;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});

