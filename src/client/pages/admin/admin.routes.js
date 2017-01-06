'use strict';

module.exports = function ($stateProvider) {
    'ngInject';

    $stateProvider.state('admin', {
        url: '/admin',
        // template: '<admin></admin>',
        template: require('./admin.html'),
        controller: 'AdminController',
        controllerAs: 'admin'
    }).state('admin.layout', {
        url: '/layout',
        template: require('./layout/layout.html'),
        controller: require('./layout/layout.controller'),
        controllerAs: 'vm'
    })
};