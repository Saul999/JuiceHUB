import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SongSchema = new Schema({
  era: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  notes: String,
  dateLeaked: {
    type: Date,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  currentlyAvailable: {
    type: String,
    enum: ["Yes", "No"],
    required: false,
  },
  isCirculating: {
    type: String,
    enum: ["Yes", "No"],
    required: false,
  },
});
