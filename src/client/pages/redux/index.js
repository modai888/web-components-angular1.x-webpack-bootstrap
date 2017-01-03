'use strict';

const PAGE_NAME = 'page.redux';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var ngRedux = require('ng-redux').default;
var createLogger = require('redux-logger');
var thunk = require('redux-thunk').default;
var rootReducer = require('./reducers');
// components
var reduxApp = require('./redux.directive');
var AsyncActions = require('./actions');
var picker = require('./picker');
var posts = require('./posts');

angular.module(PAGE_NAME, [
    ngRedux,
    uiRouter,
])
    .config(function ($ngReduxProvider) {
        /**
         * The base implementation only supports plain object actions. If you want to
         * dispatch a Promise, an Observable, a thunk, or something else, you need to
         * wrap your store creating function into the corresponding middleware. For
         * example, see the documentation for the `redux-thunk` package. Even the
         * middleware will eventually dispatch plain object actions using this method.
         */

        $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
    })
    .factory('AsyncActions', AsyncActions)
    .directive('reduxApp', reduxApp)
    .directive('picker', picker)
    .directive('posts', posts)
    .config(function ($stateProvider) {
        'ngInject';

        $stateProvider.state('redux', {
            url: '/admin/redux',
            template: '<redux-app></redux-app>',
        });
    });

module.exports = PAGE_NAME;