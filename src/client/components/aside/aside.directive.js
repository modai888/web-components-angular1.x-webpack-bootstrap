/**
 * Created by mac on 16/12/15.
 */
'use strict';

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {
            skin: '=?',
            cls: '@'
        },
        replace: true,
        template: require('./aside.html'),
        link: function ($scope) {
            $scope.skin = $scope.skinHeading || 'th-black';
        }
    }
}

module.exports = headerDirective;