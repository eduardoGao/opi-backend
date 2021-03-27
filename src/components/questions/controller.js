function addQuestion(question) {
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
    resolve(fullQuestion)
  })

  //Aquí se agrega la hora de post
}

module.exports = {
  addQuestion
}