import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Patient = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("patients", Patient);
