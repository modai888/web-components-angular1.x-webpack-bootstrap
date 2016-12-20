// Karma configuration
// Generated on Mon Dec 19 2016 22:10:38 GMT+0800 (CST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'spec.bundle.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec.bundle.js': ['webpack']
        },

        webpack: {
            devtool: 'source-map',
            entry: {},
            module: {
                loaders: [
                    {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate'},
                    {test: /\.html$/, loader: 'raw'},
                    {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
                    {
                        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url?limit=10000&mimetype=application/font-woff'
                    },
                    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
                    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
                ]
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        // concurrency: Infinity,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-coverage'
        ]
    })
};
