/**
 * Created by mac on 16/12/15.
 */
'use strict';

var controller = require('./header.controller');

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {
        },
        replace: true,
        template: require('./header.html'),
        controller: controller
    }
}

module.exports = headerDirective;