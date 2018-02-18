require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');

var router = express.Router();

const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: '54.71.203.255',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// /api/
router.get('/', function(req, res, next) {

  sequelize
  .authenticate()
  .then(() => {
    res.send('Connection has been established successfully.');
  })
  .catch(err => {
    res.send('Unable to connect to the database: ' + err);
  });

});

module.exports = router;