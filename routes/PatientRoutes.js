
const express = require("express"),
  router = express.Router(),
  { authenticateToken } = require("../middlewares/validateAuth");

// Create patient
router.post("/create/", authenticateToken, async function (req, res) {
  const { firstName, lastName, phone } = req.body;
  const user = req.user
  console.log(user)
  try {
    user.patients.push({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      remindersId: []
    })
    const result = await user.save();
    res.json(user.patients);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error creating patient");
  }
});

module.exports = router;
