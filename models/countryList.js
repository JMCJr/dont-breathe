const axios = require('axios');

const countryNames = {};

countryNames.countries = (req, res, next) => {
  const countries = req.params;
  axios({
    url: `https://api.openaq.org/v1/countries`,
    method: 'get'
  }).then(response => {
    res.locals.countriesData = response.data.results;
    console.log("from the models, countries:", response.data.results[3].code);

    next();
  
  }).catch(err => {
    console.log('error encountered in countries. error: ', err);
  })
}

module.exports = countryNames;