const axios = require('axios')

module.exports = {
    pokeView,
    pokeQuery,
    nasaView,
    nasaQuery,
    weatherView,
    weatherQuery
}

function weatherQuery(req, res) {
// weather API call goes here
}

function weatherView(req, res) {
    res.render('weatherPage', { weatherData: null })
}

function nasaQuery(req, res) {
// NASA API call goes here
}

function nasaView(req, res) {
    res.render('nasaPage', { nasaData: null })
}

function pokeView(req, res) {
    res.render('pokePage', { pokemon: null })
}

function pokeQuery(req, res) {
// pokemon API call goes here
}