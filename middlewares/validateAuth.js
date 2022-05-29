const User = require("../models/user");
const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_TOKEN, async (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = await User.findOne({ email: user.email })

    next()
  })
}

module.exports = { authenticateToken }