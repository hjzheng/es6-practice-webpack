var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // configuration
	devtool: 'source-map',
	entry: {
		app: ['./src/index.js'],
		libs: ['angular', 'angular-resource']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [

		new HTMLPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: false
		}),

		new webpack.optimize.CommonsChunkPlugin('libs', 'libs.[hash].js'),
		new ExtractTextPlugin('style.[hash].css', {
			allChunks: true
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	eslint: {
		configFile: '.eslintrc',
		emitWarning: true,
		emitError: true,
		formatter: require('eslint-friendly-formatter')
	},
	// loader
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				include: __dirname + '/src'
			}
		],
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				exclude: /(node_modules|bower_components)/,
				include: __dirname + '/src'
			},
			{
				test: /\.css$/,
				// 注意 loader 而不是 loaders
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
				exclude: /node_modules/,
				include: __dirname + '/src'
			},
			{
				test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
				loader: 'url?prefix=font/&limit=10000'
			}
		]
	}
};
