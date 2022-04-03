const express = require("express");
require("dotenv").config();
const cors = require("cors");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const apiRouter = require("./src/routers/apiRouter");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.get("/api", apiRouter);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to DincerDegre TCMB JSON API" });
  });

app.use(errorMiddleware);
app.listen(process.env.PORT, () => { // PORT = 3000
  console.log("listening on port "+process.env.PORT);
});
