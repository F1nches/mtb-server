'use strict';

var mongoose = require('mongoose');
var Bike = mongoose.model('Bikes');

exports.list_all_bikes = function(req, res) {
  Bike.find({}, function(err, bike) {
    if (err)
      res.send(err);
    res.json(bike);
  });
};

exports.create_a_bike = function(req, res) {
  var newBike = new Bike(req.body);
  newBike.save(function(err, bike) {
    if (err)
      res.send(err);
    res.json(bike);
  });
};

exports.read_a_bike = function(req, res) {
  Bike.findById(req.params.bikeId, function(err, bike) {
    if (err)
      res.send(err);
    res.json(bike);
  });
};

exports.update_a_bike = function(req, res) {
  Bike.findOneAndUpdate({_id: req.params.bikeId}, req.body, {new: true}, function(err, bike) {
    if (err)
      res.send(err)
    res.json(bike);
  });
};

exports.delete_a_bike = function(req, res) {
  Bike.remove({
    _id: req.params.bikeId
  }, function(err, bike) {
    if (err)
      res.send(err)
    res.json({ message: 'Bike successfully deleted.' });
  })
};

exports.all_bike_brands = function(req, res) {
  Bike.distinct("brand", function(err, brands) {
    if (err)
      res.send(err);
    res.json(brands);
  });
};

exports.all_bike_years = function(req, res) {
  Bike.distinct("year", function(err, years) {
    if (err)
      res.send(err);
    res.json(years);
  });
};

// Return the bike brands based on year
exports.bike_brands_by_year = function(req, res) {
  var year = req.params.year;
  Bike.find({"year": year}).distinct("brand", function(err, bikes) {
    if (err)
      res.send(err);
    res.json(bikes);
  });
}

// Return the bike models based on year and brand
exports.bike_models_by_year_brand = function(req, res) {
  var brand = req.params.brand;
  var year = req.params.year;
  Bike.find({"brand": brand, "year": year}).distinct("model", function(err, bikes) {
    if (err)
      res.send(err);
    res.json(bikes);
  });
}

// Return the specific bike model based on year and brand and model selection
exports.bike_model_by_year_brand_model = function(req, res) {
  var brand = req.params.brand;
  var year = req.params.year;
  var model = req.params.model;
  Bike.find({"brand": brand, "year": year, "model": model}, function(err, bike) {
    if (err)
      res.send(err);
    res.json(bike);
  });
}
