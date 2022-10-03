const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./Routes/routes");
const app = express();
require("dotenv").config();
const URL = process.env.URL;
const PORT = process.env.PORT;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Mongodb --Connection-
mongoose.connect(URL);
mongoose.connection.on("error", (error) => {
  console.log("Problem connection to the database" + error);
});
//---------------------------------------------------------
app.use(routes);
app.listen(PORT, () => {
  console.log(`Servre running on  ${PORT}`);
});
