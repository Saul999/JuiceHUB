import {
  addContribution,
  getAllContributions,
} from "../controllers/contributionControllers";
import express from "express";

const contributionRoutes = (app) => {
  app
    .route("/contributions")
    .get(getAllContributions) // GET all contributions
    .post(addContribution); // POST new contribution
};

export default contributionRoutes;
