/**
 * Created by mac on 16/12/15.
 */
'use strict';

const COMPONENT_NAME = 'components.adminHeader';

require('font-awesome-loader');
require('./header.scss');

var angular = require('angular');
var dropdown = require('angular-ui-bootstrap/src/dropdown');

//
var gsHeaderWrap = require('../../widgets/gs-header');

angular.module(COMPONENT_NAME, [dropdown])
    .directive('adminHeader', require('./header.directive'));

module.exports = COMPONENT_NAME;