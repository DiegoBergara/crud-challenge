module.exports = app => {
  const tutorials = require('../controllers/tutorials')
  const authenticateToken = require('../middleware/authentication')
  const router = require('express').Router()

  router.post('/', authenticateToken, tutorials.create)

  router.get('/', tutorials.getAll)

  router.get('/:id', tutorials.getById)

  router.put('/:id', tutorials.update)

  router.delete('/:id', tutorials.deleteById)

  router.delete('/', tutorials.deleteAll)

  app.use('/tutorials', router)
}
