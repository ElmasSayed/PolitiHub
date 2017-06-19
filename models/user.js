var mongoose = require('mongoose');


// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	email: {
		type: String
	},	
	password: {
		type: String
	},

	zipcode: {
		type: String
	}

});

var User = module.exports = mongoose.model('User', UserSchema);
