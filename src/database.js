const mongoose = require('mongoose')
const { mongoose, mongodb } = require('./key')

mongoose.connect(mongodb.URI, {})
  .then(db => console.log('Database is connected'))
  .catch(err => console.error(err))