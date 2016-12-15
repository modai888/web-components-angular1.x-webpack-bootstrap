'use strict';

router.$inject = ['$stateProvider'];

function router($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeController',
        controllerAs: 'home'
    });
}

module.exports = router;