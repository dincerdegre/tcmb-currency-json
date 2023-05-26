const express = require("express");
require("dotenv").config();
const cors = require("cors");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const apiRouter = require("./src/routers/apiRouter");
const rateLimit = require("express-rate-limit");
const app = express();
const swaggerUi = require("swagger-ui-express");
const openApiDoc = require("./src/data/openapi.json");
const port = process.env.PORT;
const maxRateLimit = process.env.RATELIMIT_MAX;

app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: maxRateLimit,
  message: {
    status: 429,
    error: "You have exceeded Maximum requests in 24 hrs limit!",
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
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use(cors());

app.get("/", (req, res) => {
  console.log(res.getHeader("ratelimit-remaining"));
  res.status(200).json({
    author: "Dinçer Değre",
    github: "https://github.com/dincerdegre",
    baseCurrency: "TRY",
    documentation: {
      "/docs": "For API Documentation",
      "/api": "For API Routes",
    },
    ratelimit:
      "You have " +
      res.getHeader("ratelimit-remaining") +
      " request Remaining for 24 Hours",
    message: "Welcome to TCMB JSON API.",
  });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDoc));

app.use("/api", apiRouter);

app.use(errorMiddleware);
app.listen(port, () => {
  // PORT = 3000
  console.log("listening on port " + port);
});
