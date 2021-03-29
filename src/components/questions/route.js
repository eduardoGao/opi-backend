const express = require('express')
const controller = require('./controller')

function routeQuestions(app) {
  const router = express.Router()

  app.use('/api/questions', router)

  router.get('/', (req, res) => {
    // res.send('Hello from Questions')
    controller.getAllQuestions()
      .then((response) => res.send(response))
      .catch((err) => console.error(err))
  })

  router.post('/', (req, res) => {
    controller.generateQuestion(req.body)
      .then(question => res.status(201).json({
        status: res.statusCode,
        question
      }))
      .catch(err => console.error(err))
  })

  router.patch('/:_id', (req, res) => {
    const id = req.params._id
    const answer = req.body

    controller.answerQuestion(id, answer)
      .then(answerRes => res.status(201).json({
        status: statusCode,
        answerRes
      }))
      .catch(err => res.status(500).send(err))
  })
}

module.exports = routeQuestions