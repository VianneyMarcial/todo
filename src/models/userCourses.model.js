const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = require("./categories.models");
const Courses = require("./courses.models");

const CoursesCategories = db.define(
  "courses_categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "course_id",
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "course_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CoursesCategories;