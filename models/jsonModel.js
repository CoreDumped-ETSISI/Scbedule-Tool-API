'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jsonSchema = new Schema({
    file: {
        type: JSON,
    }
});

module.exports = mongoose.model('json', jsonSchema);