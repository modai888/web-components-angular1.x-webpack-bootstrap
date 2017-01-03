/**
 * Created by mac on 16/12/15.
 */
'use strict';

const COMPONENT_NAME = 'components.asideMenu';

require('font-awesome-loader');
require('./aside.scss');

var angular = require('angular');
// directive
var uiTree = require('../../widgets/ui-tree');

angular.module(COMPONENT_NAME, [uiTree])
    .directive('asideMenu', require('./aside.directive'));

module.exports = COMPONENT_NAME;