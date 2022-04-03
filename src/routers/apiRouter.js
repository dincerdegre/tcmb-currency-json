const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/latestprice/:symbol", (req, res) => {
  res.status(200).json({ message: "Welcome to Tools API" });
});

router.get("/latestprices", (req, res) => {
  res.status(200).json({ message: "Welcome to Tools API" });
});

router.get("/currencies",apiController.currencies);

router.get("/", (req, res) => {
  const result = {
    author: "Dinçer Değre",
    github: "https://github.com/dincerdegre",
    baseCurrency: "TRY",
    calls: {"/currencies": "Fetch All Currency Symbol and Names", "/latestprices": "Fetch All Currencies Buy and Sell Prices", "/latestprice/SYMBOL": "Fetch Only choosen SYMBOL (e.g. USD and EUR) Buy and Sell Price"},
    message: "Welcome to TCMB Currency Price with JSON API",
  };
  res.status(200).json(result);
});

module.exports = router;
