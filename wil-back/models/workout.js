const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutName: {type: stringify, required: true},
  exercises: {type: Object, required: true}
}, {
  timestamps: true,
});

const Workouts = mongoose.model('Workout', workoutSchema);

module.exports = {Workouts};