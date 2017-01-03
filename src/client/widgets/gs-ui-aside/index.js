'use strict';

const MODULE_NAME = 'gs.ui.module.aside';
var angular = require('angular');

require('./aside');

angular.module(MODULE_NAME, ['gs.ui.aside']);

module.exports = MODULE_NAME;