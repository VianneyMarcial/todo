const db = require ('../Utils/database');
const {DataTypes} = require('sequelize');
const Categories = require('./categories.model');
const Todos = require('./todos.models');

const TodosCategories = db.define("todos_categories",{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
  },
  categoryId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field:"category_id",
    reference:{
      model:Categories,
      key:"id",
    }
  },
  todoId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field:"todo_id",
    reference:{
      model:Todos,
      key:"id",
    }
  },
})

module.exports = TodosCategories;