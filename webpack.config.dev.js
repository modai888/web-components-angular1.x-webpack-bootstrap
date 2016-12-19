var path = require('path');

var webpack = require('webpack');
var config = require('./webpack.config');

config.entry = {
    app: './src/client/app.js'
};

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, './build')
};

config.plugins = config.plugins.concat([

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
