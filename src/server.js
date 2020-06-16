import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Check Rolling Now?');
});

app.get('/hello', (req, res) => {
    res.send('who dis?');
});

app.listen(3000, () => console.log(`Listening on port 3000.`));
