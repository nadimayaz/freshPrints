

var express    = require('express');
var bodyParser = require('body-parser');
var sql        = require('mysql');
var pjson      = require('./config.json');
var app	       = express();

//Declare
app.set('port', process.env.PORT || 3000);

console.log('server is running @',8000);

console.log('from package: ',pjson.port);

app.get('/',function(req,res){
	
});

app.listen(config.port);
