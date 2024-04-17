import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // role: {
    //   type: String,
    //   enum: ["admin", "moderator", "user"],
    //   default: "user",
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
