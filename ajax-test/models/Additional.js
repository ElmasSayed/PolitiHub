
var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var AdditionalSchema = new Schema({
 
  additionalZip: {
    type: Number,
    trim: true,
  	min: [5, 'Must be a valid Zip-code'],
    max: 9
  },
});




var Additional = mongoose.model("Additional", AdditionalSchema);


module.exports = Additional;