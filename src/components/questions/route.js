const express = require('express')

function routeQuestions(app) {
  const router = express.Router()

  app.use('/api/questions', router)

  router.get('/', (req, res) => {
    res.send('Hello from Questions')
  })

  router.post('/', (req, res) => {
    res.send('Hello from questions POST')
  })
}

module.exports = routeQuestions