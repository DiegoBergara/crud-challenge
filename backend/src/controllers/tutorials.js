const db = require('../models')
const Tutorial = db.tutorials
const Op = db.Sequelize.Op

const create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can't be empty."
    })
    return null
  }

  const tutorial = {
    title: req.body.title,
    videoUrl: req.body.videoUrl,
    description: req.body.description,
    isPrivate: req.body.isPrivate ? req.body.isPrivate : false
  }

  Tutorial.create(tutorial)
    .then(data => {
      res.send(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
            error.message
      })
    })
}

const getAll = (req, res) => {
  const title = req.query.title
  const status = req.query.status

  const condition = {}
  if (title) {
    condition.title = { [Op.like]: `%${title}%` }
  }
  if (status) {
    condition.isPrivate = { [Op.eq]: status }
  }

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message
      })
    })
}

const getById = (req, res) => {
  const id = req.params.id
  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Tutorial ${id} not found.`
        })
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

const update = (req, res) => {
  const id = req.params.id
  Tutorial.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num === 1) {
        res.status(204).send()
      } else {
        res.send({
          message: `Error updating tutorial ${id}`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

const deleteById = (req, res) => {
  const id = req.params.id
  Tutorial.destroy({
    where: { id }
  })
    .then(num => {
      if (num === 1) {
        res.status(204).send()
      } else {
        res.send({
          message: `Error deleting tutorial ${id}`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

const deleteAll = (_, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `Deleted ${nums} tutorials` })
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message
      })
    })
}

module.exports = {
  create, getAll, getById, update, deleteById, deleteAll
}
