const express = require('express')
const app = express()
const { config } = require('../config')
const routeQuestions = require('./components/questions/route')
const routeStats = require('./components/stats/route')
const connect = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

routeQuestions(app)
routeStats(app)

const uri = `mongodb+srv://${config.DB_USER}:${config.MONGO_PASSWORD}@clusteropi.fothr.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`
connect(uri)

app.get('/', (req, res) => {
  res.send('Hello, i am alive')
})

app.listen(config.PORT, () => {
  console.log(`App listening on http://localhost:${config.PORT}`)
})