/**
 *  应用－首页
 */

'use strict';

const PAGE_NAME = 'page.home';

// require('bootstrap.css');
require('./home.scss');

var angular = require('angular');
var uiRouter = require('angular-ui-router');

// 依赖组件
var sentiTrends = require('../../components/sentiTrends');


angular.module(PAGE_NAME, [uiRouter, sentiTrends])
    .config(require('./home.routes'))
    .controller('HomeController', require('./home.controller'));

module.exports = PAGE_NAME;
