const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  grade1: { type: String, required: true },
  grade2: { type: String, required: true },
  grade3: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
