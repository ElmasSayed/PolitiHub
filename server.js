var express              = require('express');
var path                 = require('path');
var bodyParser           = require('body-parser');
var mongo                = require('mongodb');
var mongoose             = require('mongoose');
var ejs                  = require('ejs');
var jwt                  = require('jsonwebtoken');
var dataController       = require('./controllers/data-controller.js');
var config               = require('./config/config.js')

mongoose.connect('mongodb://localhost/userRegistry');
var db = mongoose.connection;

// Init App
var app = express();

// View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'views')));

//

app.get('/api/get-data', dataController.getData)

app.post('/api/post-data', dataController.postData);


// Set Port
app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});