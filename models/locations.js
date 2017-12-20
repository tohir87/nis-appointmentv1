var mongoose = require('mongoose')

// Location schema
var locationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address: {
       street : {
        type: String,
        required: true
       },
       city : {
        type: String
       },
       state : {
        type: String,
        required: true
       },
       country : {
        type: String
       }
    },
    contact: {
        email:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        }
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

var Location = module.exports = mongoose.model('Location', locationSchema)

// get locations
module.exports.getLocations = function(callback, limit){
    Location.find(callback).limit(limit)
}

// add location 
module.exports.addLocation = function(location, callback){
    Location.create(location, callback)
}

// remove location
module.exports.removeLocation = function(id, callback){
    var query = {_id: id}
    Location.remove(query, callback)
}