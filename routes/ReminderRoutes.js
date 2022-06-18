const express = require("express"),
  router = express.Router(),
  Reminder = require("../models/reminder"),
  accountSid = process.env.TWILIO_ACCOUNT_SID,
  authToken = process.env.TWILIO_AUTH_TOKEN,
  client = require("twilio")(accountSid, authToken),
  system = require("../system");

// Register
router.post("/create/", async function (req, res) {
  const { start, end, frequency, msg, userId, patientId, medicationId } =
    req.body;

  const reminder = new Reminder({
    start,
    end,
    frequency,
    msg,
    userId,
    patientId,
    medicationId,
  });

  const starter = {
    _id: reminder._id.toString(),
    start,
    end,
    frequency,
    msg,
    userId,
    patientId,
    medicationId,
  };

  console.log(reminder._id.toString());

  try {
    const result = await reminder.save();
    console.log(starter);
    system.startReminder(starter);
    res.json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error creating reminder");
  }
});

// Delete
router.delete("/delete/", async function (req, res) {
  const { id } = req.body;

  console.log(`delete this: ${id}`);

  try {
    system.deleteReminder(id);
    await Reminder.findByIdAndRemove(id);
    res.json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error deleting reminder");
  }
});

// Send SMS Reminder
router.post("/sms/", async function (req, res) {
  client.messages.create({
    body: req.body.msg,
    from: +19782881660,
    to: req.body.phone,
  });
});

module.exports = router;
