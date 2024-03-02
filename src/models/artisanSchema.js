const mongoose = require('mongoose');

const timePointSchema = new mongoose.Schema({
  name: String,
  time: Number,
  gp: Number,
  fan: Number,
  temp: Number,
});

const resultSchema = new mongoose.Schema({
  taste: String,
  vessel: String,
  grind_size: Number,
  water_temp: Number,
  wait: String
});

const roastSchema = new mongoose.Schema({
  title: String,
  region: String,
  processed: String,
  date: Date,
  green_mass: Number,
  roasted_mass: Number,
  charge_temp: Number,
  ambient_temp: Number,
  chaff: String,
  fc_freq: String,
  fc_latency: String,
  time_points: [timePointSchema],
  phases_percentage: [Number],
  results: [resultSchema],
});

const Roast = mongoose.model('Roast', roastSchema);

module.exports = Roast;
