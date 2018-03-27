const axios = require('axios');

const cityNames = {};

cityNames.cities = (req, res, next) => {
  const code = req.params.code;
  console.log(code);
  axios({
    url: `https://api.openaq.org/v1/cities?country=${code}`,
    method: 'get'
  }).then(response => {
    res.locals.citiesData = response.data.results;
    console.log("from the models, cities:", response.data.results[0]);
    next();
  }).catch(err => {
    console.log('error encountered in cities. error: ', err);
  })
}

module.exports = cityNames;

