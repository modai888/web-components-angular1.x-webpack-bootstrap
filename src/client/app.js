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
    .run(function initApp($http) {
        'ngInject';
        // 获取当前用户自定义主题
        $http.get('/api/theme').then(function (res) {
            $rootScope.theme = res.data;
        });
    })
    .name;


module.exports = appModule;