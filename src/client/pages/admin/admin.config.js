'use strict';

var reducers = require('./admin.redux').reducers;
var createLogger = require('redux-logger');

module.exports = function ($ngReduxProvider) {
    'ngInject';

    // store
    console.log('create store...');
    $ngReduxProvider.createStoreWith(reducers, [createLogger()]);
    console.log('store created...');
};