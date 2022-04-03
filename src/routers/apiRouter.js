const express = require("express");
const router = express.Router();


router.get("/latestprice/:symbol", (req, res) => {
    res.status(200).json({ message: "Welcome to Tools API" });
  });

router.get("/latestprices", (req, res) => {
    res.status(200).json({ message: "Welcome to Tools API" });
  });

router.get("/currencies", (req, res) => {
    res.status(200).json({ message: "Welcome to Tools API" });
  });


router.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Welcome to API Routes. You can use /currencies , /latestprices get calls",
    });
});

module.exports = router;
