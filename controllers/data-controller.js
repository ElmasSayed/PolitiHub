var User = require('../models/user.js');

module.exports.getData = function(req, res){
	User.find({}, function(err, people){
		if(err){
			return res.status(500).send("Couldnt Find Person");
		} 

		res.json({data:people});
	})
}

module.exports.postData = function(req, res){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return res.ststus(500).send('User not saved');
		}

		res.status(200).send('New user Saved')
	})
}