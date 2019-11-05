const forecast = require('./utils/forecast');
const geoCode = require('./utils/geocode');

geoCode('capoterra', (error, data) => {
  console.log(data)
});

forecast('-75.70', '44.16',(error, data) => {
  console.log(data)
});
