import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/songRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/songDB", {
  useNewURlParser: true,
  useUnifiedTopology: true,
});

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
// CORS setup
app.use(cors());
authRoutes(app);
routes(app);

// app.get("/songs/:name", (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello ${name}`);
// });

app.get("/", (req, res) => res.send(`Application is running on ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
