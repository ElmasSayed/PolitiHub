var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
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
	}

});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}