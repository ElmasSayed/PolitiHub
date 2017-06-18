var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ZipcodeSchema = new Schema({
 
  zip: {
    type: Number,
    trim: true,
    required: [true, "Help us locate your local represenative"],
  	min: [3, 'Must be a valid Zip-code'],
    max: 9
  },
});




var Zipcode = mongoose.model("Zipcode", ZipcodeSchema);


module.exports = Zipcode;