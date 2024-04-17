const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  img: String,
  price: {type: Number, min: 0},
  qty: {type: Number, min: 0}
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job