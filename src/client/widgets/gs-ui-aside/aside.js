'use strict';

angular.module('gs.ui.aside', [])
    .directive('gsUiAside', [function () {
        return {
            restrict: 'A',
            transclude: true,
            template: require('./aside.html'),
            // templateUrl: function(element, attrs) {
            //     return attrs.templateUrl || 'uib/template/tabs/tab.html';
            // },
            scope: {},
            controller: function () {

            },
            controllerAs: 'aside',
            link: function ($scope, $element, $attrs, controller, tranclude) {

                $scope.$watch(function () {
                    return $scope.$eval($attrs.position) +
                        $scope.$eval($attrs.theme) +
                        $scope.$eval($attrs.folded) +
                        $scope.$eval($attrs.fixed)
                }, function () {
                    var layout = [];

                    layout.push($scope.$eval($attrs.position) || 'left');
                    layout.push('th-' + $scope.$eval($attrs.theme) || 'black');
                    layout.push($scope.$eval($attrs.folded) ? 'folded' : '');
                    layout.push($scope.$eval($attrs.fixed) ? 'fixed' : '');

                    $scope.layout = layout;
                });
            }
        }
    }])
    .directive('gsLayout', [function () {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {

                $attrs.$observe('position', function (pos) {

                })
            }
        }
    }]);
