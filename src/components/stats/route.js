const express = require('express')
const getAllQuestions = require('./controller')
const store = require('../questions/store')

function routeStats(app) {
  const router = express.Router()

  app.use('/api/stats', router)

  router.get('/', (req, res) => {
    store.getQuestions().then(data => {
      res.status(200)

      const total = data.length
      const answered = data.filter(item => item.answer_text !== null).length
      const notAnswered = data.filter(item => item.answer_text === null).length

      const numAdmin = data.filter(item => item.tag === 'administrativa').length
      const numLegal = data.filter(item => item.tag === 'legal').length
      const numTec = data.filter(item => item.tag === 'tecnica').length
      const numEcon = data.filter(item => item.tag === 'economica').length
      // console.log(numAdmin)

      const percentageNotAnswered = notAnswered * 100 / total
      const percentageAnswered = answered * 100 / total

      res.json({
        totalQuestions: total,
        questions: [
          { name: 'Respondidas', value: percentageAnswered.toFixed(2) },
          { name: 'Sin responder', value: percentageNotAnswered.toFixed(2) },
        ],
        tags: [
          { name: 'Administración', value: numAdmin },
          { name: 'Legal', value: numLegal },
          { name: 'Tecnica', value: numTec },
          { name: 'Económica', value: numEcon }
        ]
      })
    })

    .catch(err => console.error(err))

  })
}

module.exports = routeStats