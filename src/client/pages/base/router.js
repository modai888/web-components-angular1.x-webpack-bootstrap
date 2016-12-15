/**
 *  应用页面布局，为其他页面所共享
 */

'use strict';

router.$inject = ['$urlRouterProvider', '$locationProvider'];

function router($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

module.exports = router;