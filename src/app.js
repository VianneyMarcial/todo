const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const userRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});