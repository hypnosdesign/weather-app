const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const publicDirectoryPath = path.join(__dirname, '../public')


const app = express();
app.set('view engine', 'pug');

app.use(express.static(publicDirectoryPath));


app.get('/', (req, res, next) => {
  res.render('index', { title: 'index'})
});

app.get('/about', (req, res, next) => {
  res.render('about', { title: 'about'})
});

app.get('/help', (req, res, next) => {
  res.render('help', { title: 'help'})
});

app.get('/weather', (req, res, next) => {

  if (!req.query.address) {
    return res.send({
      error: "Devi inserire una località"
    })
  }

  geocode(req.query.address, (error, {latitude,longitude, location}) => {
    forecast(latitude, longitude, (error, forecastData) => {
      res.send({
        data: forecastData,
        location,
        query: req.query.address
      })
    });
    //res.render('weather', { title: 'weather'})
  });
})

app.get('**', (req, res, next) => {
  res.render('404', { title: '404'})
});

app.listen(process.env.PORT || 3000, () => {
  console.log( 'Server Running at port' + process.env.PORT)
})
