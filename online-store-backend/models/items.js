const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: Number,
  available: Number
})

module.exports = mongoose.model('Item', itemSchema)