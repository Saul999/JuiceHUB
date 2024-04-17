import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export const test = (req, res) => {
  res.json({ message: "User Test worksx" });
};
