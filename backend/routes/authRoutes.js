import express from "express";
import { signup, signin } from "../controllers/authController";

const authRoutes = (app) => {
  app.route("/auth/signup").post(signup);
  app.route("/auth/signin").post(signin);
};
export default authRoutes;
