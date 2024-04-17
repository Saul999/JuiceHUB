import express from "express";
import { signup } from "../controllers/authController";

const authRoutes = (app) => {
  app.route("/auth").post(signup);
};

export default authRoutes;
