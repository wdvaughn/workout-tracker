const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Exercise Type is Required"
    },
    name: {
      type: String,
      trim: true,
      required: "Exercise Name is Required"
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;