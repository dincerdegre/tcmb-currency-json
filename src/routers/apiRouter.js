const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/latestprice/:code", apiController.price);

router.get("/latestprices", apiController.prices);

router.get("/currencies", apiController.currencies);

router.get("/", (req, res) => {
  const result = {
    message: "Welcome to TCMB Currency Price with JSON API",
  };
  res.status(200).json(result);
});

module.exports = router;
