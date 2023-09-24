const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize({
  host: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD,
  username: DB_USERNAME,
  dialect: 'mysql',
  database: DB_NAME,
});

sequelize.sync({ force: false })
  .then(() => {
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

module.exports = sequelize;