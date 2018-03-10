const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const eventSchema = new mongoose.Schema({
  title: { type: String },
  lng: { type: Number, required: true },
  lat: { type: Number, required: true },
  desc: { type: String }
})

module.exports = mongoose.model('Event', eventSchema)
