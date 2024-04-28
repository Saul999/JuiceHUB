import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContributionSchema = new Schema({
  title: String,
  information: String,
  userID: String,
});
