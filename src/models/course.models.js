import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  name: { type: String },
  deparment: {},
});

const Course = mongoose.model("Course", courseSchema);
