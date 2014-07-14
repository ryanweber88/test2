var express  = require('express');
var app      = express();
var server   = app.listen(8080);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

console.log('Listening on port 8080');