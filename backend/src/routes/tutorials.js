module.exports = app => {
  const tutorials = require('../controllers/tutorials')
  const router = require('express').Router()

  router.post('/', tutorials.create)

  router.get('/', tutorials.getAll)

  router.get('/:id', tutorials.getById)

  router.put('/:id', tutorials.update)

  router.delete('/:id', tutorials.deleteById)

  router.delete('/mass_delete', tutorials.deleteAll)

  app.use('/tutorials', router)
}
