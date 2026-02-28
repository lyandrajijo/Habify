import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  datesCompleted: [
    {
      type: String
    }
  ]
});

export default mongoose.model("Habit", habitSchema);