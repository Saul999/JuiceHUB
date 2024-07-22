import { express } from "express";
import { test, addUser } from "../controllers/userController";

const userRoutes = (app) => {
  app.route("/users").post(addUser).get(test);
};

export default userRoutes;
