'use strict';

module.exports = function ($stateProvider) {
    'ngInject';

    $stateProvider.state('admin', {
        url: '/admin',
        // template: '<admin></admin>',
        template: require('./admin.html'),
        controller: 'AdminController',
        controllerAs: 'admin'
    });
};