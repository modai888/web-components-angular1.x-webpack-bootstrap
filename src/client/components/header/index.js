/**
 * Created by mac on 16/12/15.
 */
'use strict';

const COMPONENT_NAME = 'components.header';

require('font-awesome-loader');
require('./header.scss');

var angular = require('angular');
var angularUI = require('angular-ui-bootstrap');


angular.module(COMPONENT_NAME, [angularUI])
    .directive('appHeader', require('./header.directive'));

module.exports = COMPONENT_NAME;