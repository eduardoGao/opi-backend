const express = require('express')
const controller = require('./controller')

function routeQuestions(app) {
  const router = express.Router()

  app.use('/api/questions', router)

  router.get('/', (req, res) => {
    res.send('Hello from Questions')
  })

  router.post('/', (req, res) => {
    controller.generateQuestion(req.body)
      .then(question => res.status(201).json({
        status: res.statusCode,
        question
      }))
      .catch(err => console.error(err))
  })
}

module.exports = routeQuestions