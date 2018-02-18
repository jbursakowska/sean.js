require('dotenv').config();
const Sequelize = require('sequelize');

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

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.err('Unable to connect to the database: ', err);
});

module.exports = sequelize;