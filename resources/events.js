'use strict';

var _ = require('lodash'),
  data = require('./data/events');

module.exports = function(app) {
  //GET
  app.get('/events', function(req, res) {
    res.status(200);
    console.log('GET getEvents');
    res.json(data.events);
  });
  // GET
  app.get('/events/:id', function(req, res) {
    res.status(200);
    console.log('GET getEvents by ID');
    res.json(data.addGrading);
  });
}