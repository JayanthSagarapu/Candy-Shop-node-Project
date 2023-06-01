const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/router");
const { sequelize, CandyStore } = require("./models/candyDb");
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

sequelize.sync().then(
  app.listen(port, () => {
    console.log("running app");
  })
);
