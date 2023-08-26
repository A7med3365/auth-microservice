import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/current', (req, res) => {
  res.send('Hi there!');
});

app.get('/api/users/test', (req, res) => {
  res.send('testing');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});