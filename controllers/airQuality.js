const express = require("express");
const router = express();
const airQuality = require("../models/airQuality.js");
const auth = require("../services/auth.js");
const comments = require("../models/comments.js");

router.get("/:country/:city", airQuality.measurements, (req, res) => {
  console.log("hitting air quality PAGE city:", res.locals.measurementsData);
  res.render("city", {measurementsData: res.locals.measurementsData});
});

module.exports = router;