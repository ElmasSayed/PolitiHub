var express = require('express');
var router = express.Router();
var request = require("request");

//global variables
var body;


/* GET home page. */
router.get('/senate', function(req, res, next) {

var request = require("request");

var options = { method: 'GET',
  url: 'https://openstates.org/api/v1/bills/',
  qs: 
   { chamber: 'upper',
     q: 'current',
     apikey: 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf' },
  headers: 
   { 'postman-token': '3281e1e4-90a8-b803-adc8-03fecb0f7d32',
     'cache-control': 'no-cache' } };


request(options, function (error, response, body) {
  if (error) throw new Error(error);

	  body = JSON.parse(body);
	  res.render('index', { body: body });	
  		//console.log(body);
});

  


router.get('/house', function(req, res, next){
var options = { method: 'GET',
  url: 'https://openstates.org/api/v1/bills/',
  qs: 
   { chamber: 'lower',
     q: 'current',
     apikey: 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf' },
  headers: 
   { 'postman-token': '83b75943-548b-dca3-ce22-d0a2a0d0ce68',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

	body = JSON.parse(body);
	res.render('index', { body: body });
	//res.render('index', { response: body });
		//console.log(body);
  
});
});


  
});

module.exports = router;
