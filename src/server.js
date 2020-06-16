var express = require('express');
var app = express();

var PORT = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello Men!');
});

app.listen(3000, () => console.log(`Listening on port 3000.`));
