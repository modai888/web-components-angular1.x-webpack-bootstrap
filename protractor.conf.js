/**
 *  protractor config
 * */
'use strict';

var failFast = require('protractor-fail-fast');

// 关于测试angular应用的一些说明
// https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./test/e2e/**/*.spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    plugins: [{
        package: 'protractor-fail-fast'
    }],

    onPrepare: function () {
        jasmine.getEnv().addReporter(failFast.init());

        // add jasmine spec reporter: https://github.com/bcaudan/jasmine-spec-reporter
        var SpecReporter = require('jasmine-spec-reporter');

        var opts = {
            displayStacktrace: 'none',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true,  // display summary of all pending specs after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: false,   // display each spec duration
            displaySuiteNumber: true,     // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        };

        jasmine.getEnv().addReporter(new SpecReporter(opts));

        // browser.driver.manage().window().setSize(900, 750);
        // browser.driver.manage().window().setPosition(400, 0);
    },

    afterLaunch: function () {
        failFast.clean();   // cleans up the "fail file"
    }
};