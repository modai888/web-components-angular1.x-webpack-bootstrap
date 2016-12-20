'use strict';

var moduleName = require('.');

describe('components -> sentiTrends', function () {

    let $rootScope, $compile, $controller;

    beforeEach(angular.mock.module(moduleName));

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        // $state = $injector.get('$state');
        // $location = $injector.get('$location');
        $controller = $injector.get('$controller');
        $compile = $injector.get('$compile');
    }));

    describe('Controller', function () {

        let controller;

        beforeEach(function () {
            let scope = $rootScope.$new();
            controller = $controller('SentiTrendsController', {
                $scope: scope,
                $element: $compile('<div><div class="panel-body"></div></div>')(scope)
            });
            // scope.$digest();
        });

        it('has a chart instance', function () {
            expect(controller.title).toEqual('senti-trends'); 
        });

        afterEach(function () {

        });

    });

    describe('View', function () {

        let scope, template;

        beforeEach(function () {
            scope = $rootScope.$new();
            template = $compile('<senti-trends></senti-trends>')(scope);
            // scope.$apply();
        });

        it('has name in template', () => {
            expect(template.find('h4').html()).toEqual('情感趋势图');
        });

    });

});