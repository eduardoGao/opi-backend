const questionModel = require('./model')

function postQuestion(question) {
  const newQuestion = new questionModel(question)
  newQuestion.save()
}

module.exports = postQuestion