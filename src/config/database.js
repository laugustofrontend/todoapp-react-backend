const mongoose = require('mongoose')

const infoDb = {
  host: process.env.MONGO_HOST,
  pass: process.env.MONGO_PASS,
  user: process.env.MONGO_USER,
  port: process.env.MONGO_PORT,
  db: process.env.MONGO_DB
}

mongoose.Promise = global.Promise

module.exports = mongoose.connect(`mongodb://${infoDb.user}:${infoDb.pass}@${infoDb.host}:${infoDb.port}/${infoDb.db}`, { useNewUrlParser: true })
