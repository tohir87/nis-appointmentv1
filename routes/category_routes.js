module.exports = function(app) {
    Category = require('../models/categories')
    
    // location route
    app.get('/api/categories', function(req, res){
        Category.getCategories(function(err, categories){
            if (err) {
                throw err
            }
            res.json(categories)
        })
    })
    
    app.post('/api/categories', function(req, res){
        var location = req.body
    
        Category.addcategory(category, function(err, category){
            if (err) {
                throw err
            }
            res.json(category)
        })
    })
    
    app.delete('/api/categories/:_id', function(req, res){
        var id = req.params._id
    
        Category.removeCategory(id, function(err, category){
            if (err){
                throw err
            }
            res.json(category)
        })
    })
}