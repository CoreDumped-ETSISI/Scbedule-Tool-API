'use strict';
var mongoose = require('mongoose');
var json = mongoose.model('json');
var fs = require('fs');

exports.getJson = function(req, res) {
    var jsoninfo = fs.readFileSync('horarios.json');
    if(jsoninfo != null){
      res.send(jsoninfo);
    }else{
      res.send('No Json')
    }
    
};

exports.deleteJson = function(req, res) {
  fs.unlink('./horarios.json', (err) => {
    if (err)
      res.send(err)
    res.send('file deleted')
  });
};