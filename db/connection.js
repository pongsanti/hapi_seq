const path = require('path');
const Sequelize = require('sequelize');

const dbPath = path.join(__dirname, 'tut.db');

const sequelize = new Sequelize(`sqlite://${dbPath}`, {
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.import(path.join(__dirname, 'model', 'user'));

module.exports = sequelize;