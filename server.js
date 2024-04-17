const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

const jobsController = require('./controllers/jobs.js') 
app.use('/jobs', jobsController)

console.log('MongoDB URI:', mongoURI)
mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' error with mongo connection'))
db.on('connected', () => console.log('mongo is connected'))
db.on('disconnected', () => console.log('mongo disconnected'))





app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
}) 