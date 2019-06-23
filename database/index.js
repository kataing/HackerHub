const Sequelize = require('sequelize');

const connection = new Sequelize ('gitHub', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(() => {
    console.error('Unable to connect to the database');
  })

module.exports = connection;