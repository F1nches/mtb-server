'use strict';
module.exports = function(api) {
  var bikeList = require('../controllers/controller');

  // Bikelist API Routes
  api.route('/bikes').get(bikeList.list_all_bikes).post(bikeList.create_a_bike);
  api.route('/bikes/brands').get(bikeList.all_bike_brands);
  api.route('/bikes/years').get(bikeList.all_bike_years);
  api.route('/bikes/:bikeId').get(bikeList.read_a_bike).put(bikeList.update_a_bike).delete(bikeList.delete_a_bike);

  api.route('/bikes/year/:year').get(bikeList.bike_brands_by_year);
  api.route('/bikes/year/:year/brand/:brand').get(bikeList.bike_models_by_year_brand);
  api.route('/bikes/year/:year/brand/:brand/model/:model').get(bikeList.bike_model_by_year_brand_model);

};
