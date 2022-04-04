const express = require("express");
require("dotenv").config();
const cors = require("cors");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const apiRouter = require("./src/routers/apiRouter");
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    error: "You have exceeded the 100 requests in 24 hrs limit!",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
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

app.get("/", (req, res) => {
  console.log(res.getHeader("ratelimit-remaining"));
  res
    .status(200)
    .json({
      message: "Welcome to TCMB JSON API.",
      ratelimit:
        "You have " +
        res.getHeader("ratelimit-remaining") +
        " request Remaining for 24 Hours",
    });
});

app.use("/api", apiRouter);

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  // PORT = 3000
  console.log("listening on port " + process.env.PORT);
});
