import mongoose from "mongoose";
import { ContributionSchema } from "../models/contributionsModel";

const Contribution = mongoose.model("Contribution", ContributionSchema);

// ADD NEW CONTRIBUTION || POST

export const addContribution = (req, res) => {
  let newContribution = new Contribution(req.body);

  newContribution
    .save()
    .then((savedContribution) => {
      res.json(savedContribution);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// GET ALL CONTRIBUTIONS || GET

export const getAllContributions = (req, res) => {
  Contribution.find()
    .then((contributions) => {
      res.json(contributions);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
