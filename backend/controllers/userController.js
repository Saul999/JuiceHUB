import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export const AddUser = (req, res) => {
  let newUser = new User(req.body);
};
