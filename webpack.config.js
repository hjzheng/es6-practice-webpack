var webpack = require("webpack");

module.exports = {
    // configuration
    devtool: 'source-map',

    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: __dirname + "/build",
        filename: "index.js",
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    //loader
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: /(node_modules|bower_components)/,
                include: [__dirname + '/src']
            },
            {
                test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader : 'url?prefix=font/&limit=10000'
            }
        ]
    },

    devServer: {
        contentBase: "./build"
    }

};