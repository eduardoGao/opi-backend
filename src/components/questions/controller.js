const store = require('./store')

//to GET
const questionModel = require('./model')

function getAllQuestions() {
  return new Promise((resolve, reject) => {
    resolve(store.getQuestions())
  })
}



function generateQuestion(question) {
  return new Promise((resolve, reject) => {
    if(!question) {
      console.error('[Message Controller] Pregunta inexistente')
      reject('Pregunta inexistente')
    }

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const hour = date.getHours()
    const minute = date.getMinutes()
    const published_at = `${day}-${month} a las ${hour}:${minute} horas`



    const fullQuestion = {
      user: question.user,
      question: question.question,
      tag: question.tag || null,
      published_at,
      answer_text: question.answer || null
    }

    console.log(fullQuestion)
    store.postQuestion(fullQuestion)
    resolve(fullQuestion)
  })

  //Aquí se agrega la hora de post
}

module.exports = {
  generateQuestion,
  getAllQuestions
}