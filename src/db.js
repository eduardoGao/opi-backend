const mongoose = require('mongoose')

async function connect(uri) {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((msg) => console.log(`[DB] Database connected`))
    .catch((err) => console.error(err))
}

module.exports = connect