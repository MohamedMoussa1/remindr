const jwt = require('jsonwebtoken');

function generateAccessToken(email) {
  return jwt.sign({ email: email }, process.env.JWT_TOKEN, { expiresIn: 3600 });
}

module.exports = { generateAccessToken }