const Users = require("./users.model");
const Courses = require("./courses.models");
const Courses = require("./courses.models");
const CoursesCourses = require("./courses-courses.models");

const initModels = () => {
 
  Courses.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Courses, { as: "course", foreignKey: "user_id" });

  CoursesCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(CoursesCourses, { as: "courses", foreignKey: "course_id" });

  CoursesCourses.belongsTo(Courses, {
    as: "course",
    foreignKey: "course_id",
  });
  Courses.hasMany(CoursesCourses, {
    as: "course",
    foreignKey: "course_id",
  });
};

module.exports = initModels;