import { express } from "express";
import { test, addUser, getUser } from "../controllers/userController";

const userRoutes = (app) => {
  app.route("/users").post(addUser);
  app.route("/users/:id").get(getUser);
};

export default userRoutes;
