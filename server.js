var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('privat link hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request Method: ' + new Date().toString() + ' ' +req.method);
		next();
	}
}

// app.get('/', function(req, res){
// 	res.send('Hello Express');
// });

//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication ,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);