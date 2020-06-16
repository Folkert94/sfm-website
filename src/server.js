var express = require('express');
var app = express();

var PORT = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
