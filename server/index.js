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
  const { login, score, avatar_url } = req.body;
  models.findAll({ login, score, avatar_url })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('We were not able to retreive your infromation');
      console.error('We were not able to retreive your information', err);
    })
})

app.post('/users', (req, res) => {
  const { login, score, avatar_url } = req.body;
  models.create({ login, score, avatar_url })
    .then(() => {
      res.status(201).send('Your entry has been posted');
    })
    .catch((err) => {
      res.status(400).send('We were not able to send your information');
      console.log('We were not able to send your information', err);
    })
})

// Using req.query
app.put('/users', (req, res) => {
  const { id } = req.query;
  const { login, score, avatar_url } = req.body;
  models.update(
    { login, score, avatar_url },
    { where: { id } })
    .then(() => {
      res.status(204).send('Your entry has been updated');
    })
    .catch((err) => {
      res.status(400).send('We were not able to update your information');
      console.log('We were not able to update your information', err);
    })
})
// Using req.params
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { login, score, avatar_url } = req.body;
  models.update(
    { login, score, avatar_url },
    { where: { id } })
    .then(() => {
      res.status(204).send('Your entry has been updated');
    })
    .catch((err) => {
      res.status(400).send('We were not able to update your information');
      console.log('We were not able to update your information', err);
    })
})
// Using req.query
app.delete('/users', (req, res) => {
  const { id } = req.query;
  models.destroy(
    { where: { id } })
    .then(() => {
      res.status(204).send('Your entry has been deleted');
    })
    .catch((err) => {
      res.status(400).send('We were not able to delete your information');
      console.log('We were not able to delete your entry', err);
    })
})
// Using req.params
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  models.destroy(
    { where: { id } })
    .then(() => {
      res.status(204).send('Your entry has been deleted');
    })
    .catch((err) => {
      res.status(400).send('We were not able to delete your information');
      console.log('We were not able to delete your entry', err);
    })
})