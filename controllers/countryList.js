const express = require("express");
const countriesRouter = express();
const countries = require("../models/countryList.js");

countriesRouter.get("/", countries.countries, (req, res) => {
  console.log("hitting countries:", res.locals.countriesData);
  res.render('home', {countriesData: res.locals.countriesData});
});

module.exports = countriesRouter;