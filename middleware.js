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

module.exports = middleware;