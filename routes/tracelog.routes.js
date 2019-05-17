'use strict';
module.exports = function(app){
	var tracelog = require('../controllers/tracelog.controllers');
	app.route('/tracelog')
	.post(tracelog.saveError);
};
