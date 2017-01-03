'use strict';

var controller = require('./admin.controller');

var adminComponent = {
    restrict: 'E',
    template: require('./admin.html'),
    controller: controller,
};

module.exports = adminComponent;