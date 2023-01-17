const db = require("../utils/database");
const Users = require("../models/users.model");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const CoursesCategories = require("../models/courses-categories.models");

const users = [
  { first_name: "Karla", last_name: "Gomez", email: "karly@gmail.com", password: "1234" }, 
  { first_name: "Hector", last_name: "Suarez", email: "htor22@gmail.com", password: "1234" }, 
];

const courses = [
  { title: "Estudiar node", description: "shalala shalalal", user_id: 1 },
  { title: "Pasear al perro", description: "shalala shalalal 2", user_id: 1 }, 
  { title: "lavar platos", user_id: 2 }, 
  {
    title: "ir chequeo mensual",
    description: "porque node no me deja",
    user_id: 3,
  }, 
];

const categories = [
  { name: "personal" },
  { name: "educacion" }, 
  { name: "salud" },
  { name: "trabajo" }, 
  { name: "hogar" }, 
  { name: "cocina" }, 
  { name: "deporte" }, 
  { name: "ocio" }, 
  { name: "financiero" }, 
  { name: "entretenimiento" }, 
];

const coursesCategories = [
  { courseId: 1, todoId: 1 },
  { courseId: 2, todoId: 1 },
  { courseId: 4, todoId: 1 },
  { courseId: 1, todoId: 2 },
  { courseId: 7, todoId: 2 },
  { courseId: 10, todoId: 2 },
  { courseId: 3, todoId: 2 },
  { courseId: 5, todoId: 3 },
  { courseId: 6, todoId: 3 },
  { courseId: 1, todoId: 4 },
  { courseId: 3, todoId: 4 },
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((todo) => Courses.create(todo));
    }, 100);
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 250);
    setTimeout(() => {
      coursesCourses.forEach((tc) => CoursesCourses.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));