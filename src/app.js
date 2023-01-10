const express = require ('express');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const app = express();
const db = require ("./Utils/database");
const PORT = 8000;
const Todos = require('./models/todos.models');

app.use (express.json ());

app.get('/', (req, res) => {
  res.status(200).json({message:"Hi"})
});
app.get("/users", async(req, res) => {
  try {
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/:id", async(req, res) => {
  try {
    const {id} = req.params; 
    const result = await Users.findByPk(id);
    res.send(id);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/username/:username", async(req, res) => {
  try {
    const {username} = req.params;
    const result = await Users.findOne({
      where: {username}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/users", async(req, res) => {
  try {
    const user = req.body; 
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/users/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const field =req.body; 
    const result = await Users.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/users/:id", async(req, res) => {
  try {
    const {id} = req.params; 
    const result = await Users.destroy({
      where:{id}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


app.get("/todos", async(req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos/:id", async(req, res) => {
  try {
    const {id} = req.params; 
    const result = await Todos.findByPk(id);
    res.send(id);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos/username/:username", async(req, res) => {
  try {
    const {username} = req.params;
    const result = await Todos.findOne({
      where: {username}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/todos", async(req, res) => {
  try {
    const user = req.body; 
    const result = await Todos.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/todos/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const field =req.body; 
    const result = await Todos.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/todos/:id", async(req, res) => {
  try {
    const {id} = req.params; 
    const result = await Todos.destroy({
      where:{id}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`corriendo servidor puerto ${PORT}`)
});
db.authentificate()
initModels()
db.sync({alter:true})
.then(() => console.log('Autenticación existosa'))
.catch((error) => console.log(error));
