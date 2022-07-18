require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
var routes = require("./Routers/router");

app.listen(port, () => {
  console.log(`Project is listening at http://localhost:${port}`);
});

app.use("/", routes);
