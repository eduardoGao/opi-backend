const express = require('express')
const app = express()
const { config } = require('../config')
const cors = require('cors')
const routeQuestions = require('./components/questions/route')
const routeStats = require('./components/stats/route')
const connect = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

routeQuestions(app)
routeStats(app)

const uri = `mongodb+srv://${config.DB_USER}:${config.MONGO_PASSWORD}@clusteropi.fothr.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`
// const uri = `mongodb://db_user_opi:${config.MONGO_PASSWORD}@clusteropi-shard-00-00.fothr.mongodb.net:27017,clusteropi-shard-00-01.fothr.mongodb.net:27017,clusteropi-shard-00-02.fothr.mongodb.net:27017/${config.DB_NAME}?ssl=true&replicaSet=atlas-lhe739-shard-0&authSource=admin&retryWrites=true&w=majority`
connect(uri)

app.get('/', (req, res) => {
  res.send('Hello, i am alive')
})

app.listen(config.PORT, () => {
  console.log(`App listening on http://localhost:${config.PORT}`)
})