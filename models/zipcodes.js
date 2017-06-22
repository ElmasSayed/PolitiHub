var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ZipcodeSchema = new Schema({
RecordNumber : Number,
    Zipcode : Number,
    ZipCodeType : String,
    City : String,
    State : String,
    LocationType : String,
    Lat : Number,
    Long : Number,
    Xaxis : Number,
    Yaxis : Number,
    Zaxis : Number,
    WorldRegion : String,
    Country : String,
    LocationText : String,
    Location : String,
    Decommisioned : Boolean,
    TaxReturnsFiled : Number,
    EstimatedPopulation : Number,
    TotalWages : Number,
    Notes : String
});

var Zipcode = mongoose.model("Zipcode", ZipcodeSchema);
module.exports = Zipcode;
