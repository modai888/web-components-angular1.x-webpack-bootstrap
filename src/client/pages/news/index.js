/**
 *  应用－首页
 */

'use strict';

const PAGE_NAME = 'page.news';


// require('bootstrap.css');
require('./page.scss');

var angular = require('angular');
var uiRouter = require('angular-ui-router');

// 依赖组件
// var sentiTrends = require('../../components/sentiTrends');

angular.module(PAGE_NAME, [uiRouter])
    .config(require('./news.routes'))
    .controller('NewsController', require('./news.controller'));

module.exports = PAGE_NAME;
