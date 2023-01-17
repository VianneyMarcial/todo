const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const Courses = db.define("courses", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  instructor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Courses;