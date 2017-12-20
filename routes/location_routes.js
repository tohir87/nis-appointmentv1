module.exports = function(app) {
    Location = require('../models/locations')
    
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
    
    app.delete('/api/locations/:_id', function(req, res){
        var id = req.params._id
    
        Location.removeLocation(id, function(err, genr){
            if (err){
                throw err
            }
            res.json(genr)
        })
    })
}