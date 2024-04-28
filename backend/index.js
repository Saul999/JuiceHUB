import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/songRoutes";
import contributionRoutes from "./routes/contributionRoutes"; // Import contributionRoutes
import cors from "cors";
import { ContributionSchema } from "./models/contributionsModel";

const app = express();
const PORT = 4000;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/songDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());
routes(app);
contributionRoutes(app);

// app.get("/songs/:name", (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello ${name}`);
// });

app.get("/", (req, res) => res.send(`Application is running on ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
