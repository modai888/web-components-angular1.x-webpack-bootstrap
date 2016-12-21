var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');

var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

gulp.task('default', function () {
    console.log('Hello gulp!');
});

// 启动一个开发服务器
gulp.task('serve', ['webpack-dev-server'], function () {

    return nodemon({
        script: './src/server/app.js',
        watch: ['./src/server/'],
        env: {'NODE_ENV': 'development'},
        tasks: ['default']
    })
        .on('start', function () {
            console.log('nodemon start');

        })
        .on('restart', function () {
            console.log('nodemon restart');
        })
});

gulp.task('webpack-dev-server', function () {
    // modify some webpack config options
    var config = require('./webpack.config.dev');

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(config), {
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});