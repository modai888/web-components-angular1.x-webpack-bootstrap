/**
 * Created by mac on 16/12/15.
 */
'use strict';

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {
            skinHeading: '=?',
            skinCollapse: '=?',
            toggleHeading: '&'
        },
        replace: true,
        template: require('./header.html'),
        link: function ($scope) {

            console.log('component:header postLink');

            // $scope.skinHeading = $scope.skinHeading || 'th-primary';
            // $scope.skinCollapse = $scope.skinCollapse || 'th-dark';
        }
    }
}

module.exports = headerDirective;