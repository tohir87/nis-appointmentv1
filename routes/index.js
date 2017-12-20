// routes/index.js

const locationRoutes = require('./location_routes')
const categoryRoutes = require('./category_routes')
// const resourceRoutes = require('./resource_routes')

module.exports = function(app){
    locationRoutes(app)
    categoryRoutes(app)
}