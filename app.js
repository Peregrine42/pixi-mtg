"use strict";
var express = require('express');
var app = express();
var request = require('request');

app.get('/scene-graph-1', function(req, res){
  static_graph = {
    parent: "root",
    children: []
  }
  res
    .status(200)
    .set({ 'Content-Type': 'application/json' })
    .send(static_graph);
});

app.get('/images', function(req,res) {
  let query_string = req.originalUrl.split('?')[1];
  if (query_string !== undefined) {
    var newurl = 
      `http://gatherer.wizards.com/Handlers/Image.ashx?${query_string}`;
    console.log(newurl);
    request(newurl).pipe(res);
  }
  else {
    res
      .status(404)
      .send('not found');
  }
});


app.use(express.static('public'));

module.exports = app;