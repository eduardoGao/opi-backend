const express = require('express')

function routeStats(app) {
  const router = express.Router()

  app.use('/api/stats', (req, res) => {
    res.send('GET STATS')
  })
}

module.exports = routeStats