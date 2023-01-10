const db = require('../Utils/database');
const Users = require("../models/users.model");
const Todos = require('../models/todos.models')

const users = [
  {username:"viann", email:"vian12@gmail.com", password:"1234"},
  {username:"juan", email:"juan12@gmail.com", password:"2345"}
];

const todos = [
  {title:"tarea 1", description:"hacer tarea", userId:"1"},
  {title:"tarea 2", description:"lavar ropa", userId:"2"}
];

const categories = [];

const todosCategories = [];

debug.sync({force:true})
.then(() =>{
  console.log("iniciando sembradio");
  users.forEach((user) => Users.create(todo));

  setTimeout(() =>{
    todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));