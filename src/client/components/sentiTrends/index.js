/**
 *  舆情趋势组件
 */
'use strict';

const MODULE_NAME = 'components.sentiTrends';

require('bootstrap.css');
require('./style.scss');

var angular = require('angular');
// 依赖echarts或d3

angular.module(MODULE_NAME, [])
    .controller('SentiTrendsController', require('./sentiTrends.controller'))
    .directive('sentiTrends', require('./sentiTrends.directive'));

module.exports = MODULE_NAME;


