const mongoose = require('mongoose');

var Schema = mongoose.Schema;

/** The Bike Schema using Mongoose/MongoDB **/
var BikeSchema = new Schema({

  brand: { type: String, default: 'Unknown' },
  model: { type: String, default: 'Unknown' },
  year: { type: String, default: '2018' },
  image: { data: Buffer, contentType: String },
  fork: {
    model: { type: String, default: 'Unknown' },
    travel: { type: Number, default: 0 }
  },
  rearShock: {
    model: { type: String, default: 'Unknown' },
    travel: { type: Number, default: 0 }
  },
  handlebars: {
    model: { type: String, default: 'Unknown' },
    width: { type: Number, default: 0 }
  },
  rearDerailleur: {
    model: { type: String, default: 'Unknown' },
    speeds: { type: String, default: 'Unknown' }
  },
  shifter: { type: String, default: 'Unknown' },
  cogset: { type: String, default: 'Unknown' },
  chain: { type: String, default: 'Unknown' },
  wheels: { type: String, default: 'Unknown' },
  tires: {
    front: {
      model: { type: String, default: 'Unknown' },
      size: { type: String, default: 'Unknown' },
    },
    rear: {
      model: { type: String, default: 'Unknown' },
      size: { type: String, default: 'Unknown' },
    }
  },
  brakes: {
    model: { type: String, default: 'Unknown' },
    rotors: { type: String, default: 'Unknown' },
  },
  pedals: { type: String, default: 'Unknown' },
  grips: { type: String, default: 'Unknown' },
  seat: { type: String, default: 'Unknown' },
  seatpost: { type: String, default: 'Unknown' },
  extras: { type: String, default: 'Unknown' },

});

module.exports = mongoose.model('Bikes', BikeSchema);
