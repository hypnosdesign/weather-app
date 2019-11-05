// console.log('Starting');
//
//  setTimeout(  _ => {
//    console.log('2 secondi passati')
// }, 2000);
//
// console.log('Stopping');

 const request = require('request');
// const darkskyURL = 'https://api.darksky.net/forecast/6578e83ba320311ae3f196ac455da462/37.8267,-122.4233';
// const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF2aWRzdHVkaW8iLCJhIjoiY2p3bnpndDc0MGJoNDN5cTloemVqaW0xYiJ9.pvG_bLlqtuVpZlTbKuXH9A';
//
// // request({ url: darkskyURL, json: true, }, (err, res) => {
// //   if(err) {
// //     console.log('Nesssuna connessione: ' + err.port)
// //   } else if(res.body.error) {
// //     console.log('Località non trovata: ' + err.res.body.error)
// //   }else {
// //     console.log(res.body.currently);
// //   }
// // });
//
// request({url: mapboxURL, json: true, }, (err, res) => {
//   if(err) {
//     console.log('Nesssuna connessione: ' + err)
//   } else if(res.body.features == 0) {
//     console.log('Località non trovata')
//   }else {
//     const lat = res.body.features[0].center[1];
//     const lon = res.body.features[0].center[0];
//     console.log(lat, lon);
//   }
// });

const geocode = (address, callback) => {
  const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ '
    + decodeURIComponent(address)
    + '.json?access_token=pk.eyJ1IjoibWF2aWRzdHVkaW8iLCJhIjoiY2p3bnpndDc0MGJoNDN5cTloemVqaW0xYiJ9.pvG_bLlqtuVpZlTbKuXH9A';
  request({url: URL, json: true}, (err, res) => {
    if(err) {
      callback('Neessuna connessione', undefined)
    } else if(res.body.features == 0) {
      callback('Località non trovata', undefined)
    } else {
      callback(undefined, {
        lat: res.body.features[0].center[1],
        lon: res.body.features[0].center[0]
      })
    }
  })

};

const corretto = {
  nome: 'mattia',
  cognome: 'piano',
  azienda: 'Mavid Studio',
  indirizzo: {
    via: 'Degli Ulivi',
    numero: '29',
    localita: 'Capoterra',
    provincia: 'CA',

  }
}
