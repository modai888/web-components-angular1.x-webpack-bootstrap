/**
 * Created by mac on 16/12/15.
 */
'use strict';

var controller = require('./aside.controller');

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {
            theme: '@',
            fixed: '@',
            collapse: '='
        },
        replace: true,
        template: require('./aside.html'),
        controller: controller
    }
}

module.exports = headerDirective;