const mongoose = require("mongoose");

let patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  remindersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reminder",
    },
  ],
});

module.exports = patientSchema;
