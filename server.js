const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const api = express();
const mongoose = require('mongoose');

// Loading Bike model
Bike = require('./api/models/model.js');

// Mongoose db instance connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mtb');

api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());

// Importing route file for API
var routes = require('./api/routes/routes');
routes(api);

api.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

api.listen(port);
console.log('server started on ports: ' + port);
