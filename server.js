var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log
}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, 'localhost', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:3000');
});
