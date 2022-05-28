const express = require("express"),
  router = express.Router(),
  { generateAccessToken } = require("../utils/auth")
  User = require("../models/user");

  
// Register
router.post("/register/", async function (req, res) {
  const { firstName, lastName, phone, email, password, speciality } =
    req.body;

  const user = new User({
    firstName,
    lastName,
    phone,
    email,
    password,
    speciality
  });

  try {
    const result = await user.save();
    const token = generateAccessToken(result.email);
    console.log(result)
    res.json(token);
  } catch (err) {
    console.log(err)
  }
});

// Login
router.post("/login/", async function (req, res) {
  const { email, password } =
    req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user == null) {
      throw null;
    }
    console.log(user)
    const token = generateAccessToken(user.email);
    res.json(token);
  } catch (err) {
    res.status(403).send("Invalid email/password");
  }
});

module.exports = router;
