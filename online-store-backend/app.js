const config = require('./utils/config')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const itemRouter = require('./controllers/item')
const usersRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log("connected")
  })
  .catch((error) => {
    console.log(error)
  })
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/register', usersRouter)
app.use('/login', loginRouter)
app.use('/', itemRouter) //TODO

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//app.use(express.static('build'))

module.exports = app