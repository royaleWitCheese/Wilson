const {Workout} = require('../models/workout');

const get_all_workouts = (req, res) => {
  Workout.find()({createdAt: -1})
    .then(result => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(`There is an error in the server while loading workouts`);
    })
}

module.exports = {
  get_all_workouts
}