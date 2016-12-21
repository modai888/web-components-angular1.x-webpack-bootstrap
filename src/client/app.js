'use strict';

var angular = require('angular');

// pages
var pagesModule = require('./pages');

// app 入口
var appComponent = require('./app.component');

var appModule = angular.module('app', [
    pagesModule
])
    .component('app', appComponent)
    .name;


module.exports = appModule;