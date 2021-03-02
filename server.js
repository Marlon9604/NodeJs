const express = require('express');
const app = express();
<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Hello World 2.0');
=======
app.get('/', function (req, res) {
  res.send('Hello World 2.0!');
});
const port = process.env.port || 8080;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
>>>>>>> origin
});

