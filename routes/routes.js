const express = require('express')

const db = require('../db')

const router = express.Router()
module.exports = router

// define routes below

router.get('/', async (req, res) => {
  try {
    const bus = await db.getAllBuses()
    res.render('home', { bus })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// GET schedules
router.get('/schedule', async (req, res) => {
  try {
    const schedule = await db.getAllSchedules()
    console.log('schedule', schedule)
    res.render('schedule', { schedule })
  } catch (error) {
    res.status(500).send(error.message)
  }
})
//add schedule

router.get('/booking', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message)
  }
})
