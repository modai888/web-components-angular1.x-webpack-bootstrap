'use strict';

router.$inject = ['$stateProvider'];

function router($stateProvider) {
    $stateProvider.state('news', {
        url: '/news',
        template: require('./news.html'),
        controller: 'NewsController',
        controllerAs: 'news'
    });
}

module.exports = router;