const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
  duration: Number
})