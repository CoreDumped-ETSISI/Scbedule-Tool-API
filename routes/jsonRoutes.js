'use strict';
module.exports = function(app) {
  
    var json = require('../controllers/jsonControllers');
    
    app.route('/json')
    .get(json.getJson)
    .delete(json.deleteJson)
};