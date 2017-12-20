var mongoose = require('mongoose')

// VISA categories schema
var categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

var Category = module.exports = mongoose.model('Category', categorySchema)

// get categories
module.exports.getCategories = function(callback, limit){
    Category.find(callback).limit(limit)
}

// add category 
module.exports.addCategory = function(category, callback){
    Category.create(category, callback)
}

// Update Category
module.exports.updateCategory = function(id, category, options, callback){
    var query = {_id: id}
    var update = {
        name: category.name
    }
    Genre.findOneAndUpdate(query, update, options, callback)
}

// remove category
module.exports.removeCategory = function(id, callback){
    var query = {_id: id}
    Category.remove(query, callback)
}