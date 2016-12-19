'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

/**
 *  识别构建环境
 *  通过npm lifecycle event识别当前的构建环境
 *  针对不同的构建环境（生产、测试、开发）执行不同的webpack配置
 *  关于npm_lifecycle_event的介绍 https://yq.aliyun.com/articles/66073
 * */
let env = process.env.npm_lifecycle_event;
// 测试环境
let isTest = env === 'test' || env === 'test-watch';
// 生产环境
let isProd = env === 'build';

/**
 *  webpack 配置参数
 *  参考：http://webpack.github.io/docs/configuration.html
 * */
var config = {
    // 编译结果输出配置
    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js'
    }
};

/**
 *  entry
 *  参考：http://webpack.github.io/docs/configuration.html#entry
 *  如果为测试环境，则入口应该为一个空对象，由karma自行填充
 * */
config.entry = isTest ? {} : {
    app: './src/client/pages/index.js',
    vendor: ['angular', 'angular-ui-router'],
    // vendorCss: ['bootstrap-loader'],
    // 测试多入口添加
    tmp: ['./src/client/tmp/a.js', './src/client/tmp/b.js']
};

/**
 *  增强调试
 *  参考：http://webpack.github.io/docs/configuration.html#devtool
 * */
config.devtool = 'source-map';
if (isTest) {
    config.devtool = 'inline-source-map';
} else if (isProd) {
    config.devtool = 'source-map';
}


/**
 *  模块（资源）加载器
 *  参考：http://webpack.github.io/docs/configuration.html#module-loaders
 *  参考：http://webpack.github.io/docs/loaders.html
 * */
config.module = {
    preLoaders: [],
    loaders: [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        },
        {
            // Fonts loader
            test: /\.(svg|woff2?|ttf|eot)$/,
            loader: 'file',
            query: {
                name: './fonts/[hash].[ext]',
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader')
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader')
        },
        {
            test: /\.html$/,
            loader: 'raw'
        }
    ]
};

// 配置postcss
config.postcss = [
    autoprefixer({
        browsers: ["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]
    }),
    precss()
];

/**
 *  插件
 *  参考：
 * */
config.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'load'], minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        title: 'Web组件化开发',
        template: './src/client/pages/base/index.html',
        inject: 'body'
    }),
    new ExtractTextPlugin('[name].css')
];

/**
 *  resolve
 * */
config.resolve = {};
config.resolve.alias = {
    // 'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
};


/**
 *  webpack-dev-server 配置
 *  参考：http://webpack.github.io/docs/configuration.html#devserver
 * */
config.devServer = {
    contentBase: './build'
};


module.exports = config;