const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.js')
const jobSeed = require('../seedData.js')
const methodOverride = require('method-override')


router.use(methodOverride('_method'))

//line
router.get('/', async (req, res) => {
    const foundJobs = await Job.find({})
    res.render('index.ejs', {
      jobs: foundJobs
    })
  })
  
  // new route 
  router.get('/new', (req, res) => {
    res.render('newJob.ejs')
  })
  
  
  // seed 
  router.get('/seed', async (req, res) => {
    const newJobs = await Job.create(jobSeed)
    res.redirect('/jobs')
  })
  
  
  // show route 
  router.get('/:id', async (req, res) => {
    const foundJob = await Job.findById(req.params.id)
    console.log(foundJob)
    // res.send(foundJob)
    res.render('show.ejs', {
      job: foundJob
    })
  })
  
    // create route
    router.post('/', async (req, res) => {
      console.log(req.body)
      console.log('POST REQUEST MADE WITH: ', req.body)
      req.body.isRemote = req.body.isRemote ? true : false
      try {
        const newJob = await Job.create(req.body)
        res.redirect('/jobs')
      }catch (err) {
        console.log('ERROR WITH Jobs POST: ', err)
        res.status(500).send(err)
      }
    })
  
  // edit Job route
  router.get('/:id/edit', async (req, res) => {
    const foundJob = await Job.findById(req.params.id)
    res.render('edit.ejs', {
      job: foundJob,
      id: req.params.id
    })
  })
  
  
  // update route
  router.put('/:id', async (req, res) => {
    try{
      req.body.isRemote === 'on' ? req.body.isRemote = true : req.body.isRemote = false 
      const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.redirect(`/jobs/${req.params.id}`)   
    }
    catch{
      console.log("ERROR IN EDIT ROUTE: ", err)
      res.status(500).send(err)
    }
  })
  
  
  // delete route
  router.delete('/:id', async (req, res) => {
    await Job.findByIdAndDelete(req.params.id)
    res.redirect('/jobs')
  })
//line

module.exports = router  