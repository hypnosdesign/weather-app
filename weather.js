const forecast = require('./utils/forecast');
const geoCode = require('./utils/geocode');
const dotenv = require('dotenv');
dotenv.config();
const address = process.argv[2];

geoCode(address, (error, geocodeData) => {
    forecast(geocodeData.latitude, geocodeData.longitude,(error, forecastData) => {
      console.log(forecastData)
      console.log(geocodeData.location)

  });
});


