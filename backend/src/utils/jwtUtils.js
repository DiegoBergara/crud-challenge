const jwt = require('jsonwebtoken')

function generateAccessToken (data) {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '300s' })
}

module.exports = { generateAccessToken }
