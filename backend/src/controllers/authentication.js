const JWTUtils = require('../utils/jwtUtils.js')

const sign = (req, res) => {
  const date = new Date()

  const token = JWTUtils.generateAccessToken({ timestamp: date.getTime() })

  res.send(token)
}

module.exports = {
  sign
}
