const express = require("express"),
  router = express.Router(),
  Reminder = require("../models/reminder");

// Register
router.post("/create/", async function (req, res) {
  const { time, interval, msg, userId, patientId, medicationId } = req.body;

  const reminder = new Reminder({
    time,
    interval,
    msg,
    userId,
    patientId,
    medicationId,
  });

  try {
    const result = await reminder.save();
    res.json({ status: "success" });
  } catch (err) {
    res.status(400).send("Error creating reminder");
  }
});

module.exports = router;
