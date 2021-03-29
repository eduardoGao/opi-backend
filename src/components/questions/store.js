const questionModel = require('./model')

function postQuestion(question) {
  const newQuestion = new questionModel(question)
  newQuestion.save()
}

async function getQuestions() {
  const getData = await questionModel.find({})
  return getData
}

async function patchQuestion(id, newAnswer) {
  const findQuestion = await questionModel.findOne({
    _id: id
  })

  findQuestion.answer_text = newAnswer.answer_text
  const updateQuestion = await findQuestion.save()
  return updateQuestion
}

module.exports = {
  postQuestion,
  getQuestions,
  patchQuestion
}