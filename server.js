const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true }).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});