import { UserSchema } from "../models/userModel";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error";

const User = mongoose.model("User", UserSchema);

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json("Successfully Signed up");
  } catch (error) {
    next(error);
  }
};
