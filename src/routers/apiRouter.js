const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/latestprice/:code", apiController.price);

router.get("/latestprices", apiController.prices);

router.get("/currencies", apiController.currencies);

router.get("/", (req, res) => {
  const result = {
    author: "Dinçer Değre",
    github: "https://github.com/dincerdegre",
    baseCurrency: "TRY",
    calls: {
      "/currencies": "Fetch All Currency Symbol and Names",
      "/latestprices": "Fetch All Currencies Buy and Sell Prices",
      "/latestprice/CODE":
        "Fetch Only choosen CODE (e.g. USD and EUR) Buy and Sell Price",
    },
    message: "Welcome to TCMB Currency Price with JSON API",
  };
  res.status(200).json(result);
});

module.exports = router;
