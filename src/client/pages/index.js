'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

// bootstrap
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

// all pages
var homePage = require('./home');
var newsPage = require('./news');

var pagesModule = angular.module('app.pages', [
    uiRouter,
    homePage,
    newsPage
])
    .config(function configRouter($urlRouterProvider, $locationProvider) {
        'ngInject';

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    })
    .name;

module.exports = pagesModule;
//
// // 配置页面路由
// /*@ngInject*/
// function configRouter($urlRouterProvider) {
//     "ngInject";
//
//     $urlRouterProvider.otherwise('/');
// }
