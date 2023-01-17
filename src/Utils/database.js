const {sequelize} = require ('sequelize');
const db = new sequelize ({
  database: "todoapp",
  first_name: "postgress",
  host: "localhost",
  port: "5432",
  password: "rute",
  dialect: "postgress",
});

module.exports = db;