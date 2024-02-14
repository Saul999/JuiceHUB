import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SongSchema = new Schema({
  era: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: false,
  },
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
    enum: ["Full (CDQ)", " Snippet (CDQ)", "Full (HQ)"],
    required: true,
  },
  isCirculating: {
    type: String,
    enum: ["Yes", "No"],
    required: false,
  },
});
