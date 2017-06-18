var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");


var User = require("./models/User.js");
var Additional = require("./models/Additional.js");
// Initialize Express
var app = express();

app.use(express.static("public"));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect("mongodb://localhost/politiHUB");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/test.html"));
});

app.post("/", function (req, res){
	var newUser = new User(req.body);

	newUser.save(function(error, user){
		if (error){
			console.log(error);
		}
		else {
			console.log(user);
		}
	});
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});