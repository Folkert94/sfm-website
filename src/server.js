import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')))

// app.get('/', (req, res) => {
//   res.send('Check Rolling Now?');
// });
//
// app.get('/hello', (req, res) => {
//     res.send('who dis?');
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(3000, () => console.log(`Listening on port 3000.`));
