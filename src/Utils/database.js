const {sequelize} = require ('sequelize');
const db = new sequelize ({
  database: "todoapp",
  username: "postgress",
  host: "localhost",
  port: "5432",
  password: "rute",
  dialect: "postgress",
});

module.exports = dbnp