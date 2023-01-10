const db = require('../Utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');

const Todos = db.define('todos',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:false,
    unique:true,
    references:{
      model: Users,
      key:"id"
    }
  },
  title:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type: DataTypes.INTEGER,
  },
  iscomplete:{
    type: DataTypes.BOOLEAN,
    defaultValue:false,
    field:"is_complete",
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field: "user_id",
  },
});

module.exports = Todos;