const request = require('request');

const DSurl =  'https://api.darksky.net/forecast/6578e83ba320311ae3f196ac455da462/37.8267,-122.4233';


const geoCode =  (address, callback) => {
  const MBurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF2aWRzdHVkaW8iLCJhIjoiY2p3bnpndDc0MGJoNDN5cTloemVqaW0xYiJ9.pvG_bLlqtuVpZlTbKuXH9A`;

  request( {url: MBurl, json: true}, (error, response) => {
    if(error){
      callback('connessione assente', undefined)
    } else if( response.body.features[0].length === 0) {
      callback('coordinate sbagliate', undefined)
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];

      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      } )
    }
  });

};

geoCode('capoterra', (error, data) => {
  console.log(data)
});
