const express = require('express');
const app = express();
const cors = require('cors');
const phonesData = require('./data/phones.json');
const port = 5000;

app.use(cors());

app.get('/phones', (req, res) => {
  res.json(phonesData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
