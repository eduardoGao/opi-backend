const questionModel = require('./model')

function postQuestion(question) {
  const newQuestion = new questionModel(question)
  newQuestion.save()
}

async function getQuestions() {
  const getData = await questionModel.find({})
  return getData
}

module.exports = {
  postQuestion,
  getQuestions
}