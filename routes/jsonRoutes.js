'use strict';
module.exports = function(app) {
  
    var json = require('../controllers/jsonControllers');
    var tracelog = require('../controllers/tracelog.controllers');

    app.route('/json')
    .get(json.getJson)
    .delete(json.deleteJson);

	app.route('/tracelog')
	.post(tracelog.saveError);
};
