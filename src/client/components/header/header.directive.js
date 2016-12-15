/**
 * Created by mac on 16/12/15.
 */
'use strict';

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {},
        template: require('./header.html')
    }
}

module.exports = headerDirective;