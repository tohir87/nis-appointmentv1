var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.json())

require('./routes')(app);

// connect to mongoose
mongoose.connect('mongodb://localhost/nis')
var db = mongoose.connection

app.get('/', function(req, res){
    res.send("Please use /api for documentations")
})

app.listen(3000)