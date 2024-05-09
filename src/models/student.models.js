import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  studentId: { type: Number },
  deparment: {},
  course: {},
  address: {},
  phone: {},
});

const Student = mongoose.model("Student", studentSchema);
