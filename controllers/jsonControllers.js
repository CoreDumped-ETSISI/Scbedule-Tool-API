'use strict';
var mongoose = require('mongoose');
var json = mongoose.model('json');

exports.getJson = function(req, res) {
    json.find({}, function(err, json){
        if(err)
            res.send(err);       
        res.json(json);
    })
};

exports.postJson = function(req, res) {
    var newjson = new json(req.body);
    console.log(req.body);
    newjson.save(function(err, json) {
    if (err)
      res.send(err);
    res.json(json);
  });
};