const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

const db = require('./src/models')

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync databaseb.')
})

const corsOptions = {
  origin: 'http://localhost:8001'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const TutorialsRoutes = require('./src/routes/tutorials')
TutorialsRoutes(app)

const AuthenticationRoutes = require('./src/routes/authentication')
AuthenticationRoutes(app)

const PORT = process.env.SERVER_PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
