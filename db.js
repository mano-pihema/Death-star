const res = require('express/lib/response')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllBuses,
  getAllSchedules,
}

//write functions below

function getAllBuses(db = connection) {
  return db('buses').select()
}

function getAllSchedules(db = connection) {
  return db('schedule')
    .join('buses', 'buses.id', 'schedule.bus_id')
    .select('buses.name as name', 'schedule.day as day')
}
