const axios = require('axios');

const airQuality = {};

airQuality.measurements = (req, res, next) => {
  const country = req.params.country;
  const city = req.params.city;
  console.log(country, city);
  axios({
    url: `https://api.openaq.org/v1/measurements?country=${country}&city=${city}`,
    method: 'get'

  }).then(response => {
    res.locals.measurementsData = response.data.results[0];
    var pm25 = [];
    var pm10 = [];
    var co = [];
    console.log("from the models, measurements:", response.data.results[0]);
    next();
  }).catch(err => {
    console.log('error encountered in airQuality.measurements. error: ', err);
  })
}

module.exports = airQuality;