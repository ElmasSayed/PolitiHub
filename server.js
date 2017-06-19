var express              = require('express');
var path                 = require('path');
var bodyParser           = require('body-parser');
var mongo                = require('mongodb');
var mongoose             = require('mongoose');
var ejs                  = require('ejs');
var jwt                  = require('jsonwebtoken');
var expressJWT           = require('express-jwt');
var dataController       = require('./controllers/data-controller.js');
var config               = require('./config/config.js')

var User                 = require('./models/user.js');

mongoose.connect('mongodb://localhost/userRegistry');
var db = mongoose.connection;

// Init App
var app = express();

// JSON web token authentication setup
app.use(expressJWT({ secret: 'yoyo im da secret yo'}).unless({path: ['/','/login','/register','/api/post-data','/api/get-data']}))

// View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'views')));

//

app.get('/api/get-data', dataController.getData)

app.post('/api/post-data', dataController.postData);

app.get('/login',function(req, res){
	if(!req.body.username){
		res.status(400).send('username required');
		return;
	}
	if(!req.body.password){
		res.status(400).send('password required');
		return;
	}

	User.findOne({username: req.body.username}, function(err, user){
		user.comparePassword(req.body.password, function(err, isMatch){
			if (err) throw err;
			if(!isMatch){
				res.status(401).send('Invalid Password');
			} else {
				var myToken = jwt.sign({username: req.body.username}, 'yoyo im da secret yo')
				res.status(200).json(myToken).send('/dashboard');
				
			}
		})
	})
})

// Set Port
app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});