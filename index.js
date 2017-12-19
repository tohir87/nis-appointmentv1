var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.json())

Location = require('./models/locations')

// connect to mongoose
mongoose.connect('mongodb://localhost/nis')
var db = mongoose.connection

app.get('/', function(req, res){
    res.send("Please use /api for documentations")
})

// location route
app.get('/api/locations', function(req, res){
    Location.getLocations(function(err, locations){
        if (err) {
            throw err
        }
        res.json(locations)
    })
})

app.post('/api/locations', function(req, res){
    var location = req.body

    Location.addLocation(location, function(err, location){
        if (err) {
            throw err
        }
        res.json(location)
    })
})

app.listen(3000)