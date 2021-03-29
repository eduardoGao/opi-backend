const store = require('../questions/store')


function getAllQuestions() {
  return new Promise((resolve, reject) => {

    // store.getQuestions().then(data => {
    //   const num = data.length
    //   console.log(num)
    //   return num
    // })




    resolve(store.getQuestions())
  })
}

module.exports = getAllQuestions
