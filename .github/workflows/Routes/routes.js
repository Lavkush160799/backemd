const express = require("express");
const router = express.Router();
const user = require("../models/formSchema");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
//Routes--------------------------------------
router.get("/", (req, res) => {
  res.send("Server is working");
});
//user schema
router.post("/submit", (req, res) => {
  console.log(req.body)
  var userdata = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    subject: req.body.subject,
  
  };
  res.send(req.body);
  new user(userdata).save();
});
module.exports = router;
