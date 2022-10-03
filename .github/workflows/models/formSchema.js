const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  subject: String,
});
module.exports=mongoose.model("userdata", UserSchema);
