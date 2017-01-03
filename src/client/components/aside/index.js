/**
 * Created by mac on 16/12/15.
 */
'use strict';

const COMPONENT_NAME = 'gs.components.aside';

require('font-awesome-loader');
require('./aside.scss');

var angular = require('angular');
var angularUI = require('angular-ui-bootstrap');


angular.module(COMPONENT_NAME, [angularUI])
    .directive('appAside', require('./aside.directive'));

module.exports = COMPONENT_NAME;