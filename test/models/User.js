var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String, 
		required: [true, "Name is Required"]
	},
	email: {
		type: String,
    	unique: true,
    	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
	},
	password: {
    	type: String,
    	trim: true,
    	required: [true, "Password is Required"],
    	validate: [
      		function(input) {
        		return input.length >= 6;
      		},
      			"More than 6 in length."
    		]
  	},
  	zip: {
  		type: Number,
  		trim: true,
  		required: [true, "Help us locate your local represenative"],
  		min: [5, 'Must be a valid Zip-code'],
        max: 9
  	},
  	additionalZip: {
  		type: Schema.Types.ObjectId,
  		ref: "Additional"
  	}

});

var User = mongoose.model("User", UserSchema);

module.exports = User;