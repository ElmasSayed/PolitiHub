var mongoose = require('mongoose');


// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	zipcode: {
		type: String
	}

});

var User = module.exports = mongoose.model('User', UserSchema);
