/**
 *  应用页面布局，为其他页面所共享
 */

'use strict';

require('bootstrap.css');

var angular = require('angular');
var uiRouter = require('angular-ui-router');

//引入组件
var header = require('../components/header');

// pages
var home = require('./home');
var news = require('./news');

angular.module('app', [uiRouter, header, home, news])
    .config(require('./base/router'));

module.exports = 'app';