const Sequelize = require('sequelize');
const connection = require('./index.js');

const Users = connection.define('users', {

  login: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  score : {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatar_url: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false })

Users.sync({ force: false }).then(() => {})

module.exports = Users;