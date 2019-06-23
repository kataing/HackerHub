const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const connection = require('../database/index.js');
const models = require('../database/models.js');

const app = express();
const port = 6789;


//in typical full stack development, you ALWAYS NEED THESE THREE
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// /client/dist? the route might change depending on where your static files
//are located
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/users', (req, res) => {
  const { username, login, avatar_url } = req.body;
  models.findAll({ username, login, avatar_url })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error('We were not able to retreive your information', err);
    })
})

app.post('/users', (req, res) => {
  const { username, login, avatar_url } = req.body;
  models.create({ username, login, avatar_url })
    .then(() => {
      res.status(201).send('We posted');
    })
    .catch((err) => {
      console.log('We were not able to send your information', err);
    })
})

app.put('/users/:id', (req, res) => {
  // console.log('this is req.query',req.query);
  console.log('this is req.params', req.params);
  const { id } = req.params;
  models.update({ id })
  .then(() => {
    res.status(203).send('We updated');
  })
  .catch((err) => {
    console.log('We were not able to update your information', err);
  })
})

// app.delete('/users', (req, res) => {
//   const { username, login, avatar_url } = req.body;
//   models.
// })
