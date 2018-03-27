const express = require("express");
const citiesRouter = express();
const cities = require("../models/cityList.js");

citiesRouter.get("/:code", cities.cities, (req, res) => {
  console.log("hitting cities:", res.locals.citiesData);
  res.render('country', {citiesData: res.locals.citiesData});
});

module.exports = citiesRouter;