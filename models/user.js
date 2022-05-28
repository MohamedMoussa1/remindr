const mongoose = require("mongoose");
const patientSchema = require("./patient");

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  password: String,
  specialty: String,
  patients: [patientSchema],
});

module.exports = mongoose.model("User", userSchema);
