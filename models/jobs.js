const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  location: String,
  link: String,
  payrange: String,
  isRemote: Boolean
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job