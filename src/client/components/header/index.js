/**
 * Created by mac on 16/12/15.
 */
'use strict';

const COMPONENT_NAME = 'components.header';

// require('bootstrap-loader');
// require('bootstrap.css');
require('./header.scss');

var angular = require('angular');


angular.module(COMPONENT_NAME, [])
    .directive('gsHeader', require('./header.directive'));

module.exports = COMPONENT_NAME;