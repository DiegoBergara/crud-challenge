module.exports = app => {
  const authentication = require('../controllers/authentication')
  const router = require('express').Router()

  router.get('/', authentication.sign)

  app.use('/authentication', router)
}
