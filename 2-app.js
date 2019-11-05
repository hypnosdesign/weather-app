const request = require('request');

const DSurl =  'https://api.darksky.net/forecast/6578e83ba320311ae3f196ac455da462/39.1752,8.97199';
const MBurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/capoterra.json?access_token=pk.eyJ1IjoibWF2aWRzdHVkaW8iLCJhIjoiY2p3bnpndDc0MGJoNDN5cTloemVqaW0xYiJ9.pvG_bLlqtuVpZlTbKuXH9A';

request( {url: DSurl, json: true}, (error, response) => {
  if(error) {
    console.log('connessione assente')
  } else if(response.body.error) {
    console.log('località non trovata')
  } else {
    console.log(`It is currentrly ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain`)
  }

});

request( {url: MBurl, json: true}, (error, response) => {
    if(error){
      console.log('connessione assente')
    } else if( response.body.features[0].length === 0) {
      console.log('coordinate sbagliate')
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];

      console.log(latitude, longitude)
    }
});
