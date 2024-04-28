import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export const test = (req, res) => {
  res.json({ message: "User Test works" });
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.username)
  }
  
}