const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
  user: String,
  question: String,
  tag: String,
  published_at: String,
  answer_text: String
}, {
  versionKey: false
})

const questionModel = mongoose.model('Question', questionSchema)

module.exports = questionModel