'use strict';

const PAGE_NAME = 'gs.page.admin';

// css
require('../../components/theme/app.scss');


var angular = require('angular');
var uiRouter = require('angular-ui-router');
// redux
var ngRedux = require('ng-redux').default;

// components
var appHeader = require('../../components/header');
var appAside = require('../../components/aside');

// var adminApp = require('./admin');
var adminRoutes = require('./admin.routes');
var adminConfig = require('./admin.config');
var AdminController = require('./admin.controller');
var adminRun = require('./admin.run');

angular.module(PAGE_NAME,
    [
        ngRedux, uiRouter,
        appHeader, appAside
    ])
    .controller('AdminController', AdminController)
    .config(adminRoutes)
    .config(adminConfig)
    .run(adminRun);

module.exports = PAGE_NAME;