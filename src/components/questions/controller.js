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
    const fixDay = day <= 9 ? `0${day}` : day
    const month = date.getMonth() + 1
    const fixMonth = month <= 9 ? `0${month}` : month
    const hour = date.getHours()
    const fixHour = hour <= 9 ? `0${hour}` : hour
    const minute = date.getMinutes()
    const fixMinute = minute <= 9 ? `0${minute}` : minute


    const fullQuestion = {
      user: question.user,
      question: question.question,
      tag: question.tag || null,
      published: {
        atDay: `${fixDay}-${fixMonth}`,
        atHour: `${fixHour}:${fixMinute}`
      },
      answer_text: question.answer || null
    }

    console.log(fullQuestion)
    store.postQuestion(fullQuestion)
    resolve(fullQuestion)
  })
}

function answerQuestion(id, answer) {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject('Datos incompletos')
      return false
    }

    const date = new Date()
    const day = date.getDate()
    const fixDay = day <= 9 ? `0${day}` : day
    const month = date.getMonth() + 1
    const fixMonth = month <= 9 ? `0${month}` : month
    const hour = date.getHours()
    const fixHour = hour <= 9 ? `0${hour}` : hour
    const minute = date.getMinutes()
    const fixMinute = minute <= 9 ? `0${minute}` : minute

    const newAnswer = {
      answer_text: answer.answer_text,
      answer_user: answer.answer_user,
      answered: {
        atDay: `${fixDay}-${fixMonth}`,
        atHour: `${fixHour}:${fixMinute}`
      }
    }

    console.log(newAnswer)
    store.patchQuestion(id, newAnswer)
    resolve(newAnswer)
  })
}

module.exports = {
  generateQuestion,
  getAllQuestions,
  answerQuestion
}