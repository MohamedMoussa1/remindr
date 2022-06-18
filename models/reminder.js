const mongoose = require("mongoose");

let reminderSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  frequency: Number,
  msg: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  medicationId: String,
});

module.exports = mongoose.model("Reminder", reminderSchema);
