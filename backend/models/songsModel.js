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
  date: {
    type: String,
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
  circulating: {
    type: String,
    enum: ["Yes", "No"],
    required: false,
  },
  userContributions: {
    type: String,
    required: false,
  },
});
