const request = require('request');

const forecast =  (lat, long, callback) => {
  const DSurl =  'https://api.darksky.net/forecast/'+process.env.FORECAST_API_KEY+'/' + lat + ',' + long+'?units=si';
  request( {url: DSurl, json: true}, (error, response) => {
    if(error){
      callback('connessione assente', undefined)
    } else if( response.body.error) {
      callback('località non trovata', undefined)
    } else {
      callback(undefined,
        `It is currentrly ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain`
      )
    }
  })};


module.exports = forecast;
