'use strict';

angular.module('gs.ui.header', [])
    .directive('gsHeaderWrap', [function () {
        return {
            restrict: 'A',
            transclude: true,
            template: '<div class="app-header navbar" ng-transclude></div>'
        }
    }]);