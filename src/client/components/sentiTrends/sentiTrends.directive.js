/**
 * Created by mac on 16/12/15.
 */
'use strict';

sentiTrendsDirective.$inject = [];

function sentiTrendsDirective() {
    return {
        restrict: 'EA',
        scope: {},
        template: require('./senti-trend.html'),
        controller: 'SentiTrendsController as vm'
    }
}

module.exports = sentiTrendsDirective;