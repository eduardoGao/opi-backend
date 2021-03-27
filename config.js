require('dotenv').config()

const config = {
  PORT: process.env.port || 3000,
  DB_USER: process.env.DB_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  DB_NAME: process.env.DB_NAME
}

module.exports = { config }