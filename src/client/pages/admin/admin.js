'use strict';

// admin 管理页面入口

module.exports = [function () {
    return {
        restrict: 'EA',
        template: require('./admin.html'),
        controller: 'AdminController',
        controllerAs: 'admin'
    }
}];