import express from "express";
import Habit from "../models/Habit.js";

const router = express.Router();

// Get all habits
router.get("/", async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

// Add new habit
router.post("/", async (req, res) => {
  const newHabit = new Habit({
    name: req.body.name,
    datesCompleted: []
  });

  await newHabit.save();
  res.json(newHabit);
});

// Mark habit as completed
router.put("/:id", async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const habit = await Habit.findById(req.params.id);

  if (!habit.datesCompleted.includes(today)) {
    habit.datesCompleted.push(today);
    await habit.save();
  }

  res.json(habit);
});

export default router;