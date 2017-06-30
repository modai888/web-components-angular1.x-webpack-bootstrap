var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
// var scssLint = require('gul');
var styleLint = require('gulp-stylelint');
var htmlLint = require('gulp-html-lint');
var gutil = require('gulp-util');
var browerSync = require('browser-sync');

var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackDevMiddleware = require('webpack-dev-middleware');

const BROWSER_SYNC_SERVER = 'browser-sync-server';

const paths = {
    js: [
        './src/**/*.js',
        '!./src/**/*.spec.js'
    ],
    scss: [
        './src/**/*.scss'
    ],
    css: [
        './src/**/*.css'
    ],
    html: [
        './src/**/*.html'
    ],
    lint: [
        './test/lint.js'
    ]
};


gulp.task('default', function () {
    console.log('Hello gulp!');
});

// 启动一个开发服务器
gulp.task('serve', function () {

    return nodemon({
        script: './src/server/app.js',
        watch: ['./src/server/'],
        env: {
            'NODE_ENV': 'development'
        },
        tasks: ['default']
    })
        .on('start', function () {
            console.log('*** nodemon start ***');
            startBrowserSync(true);
        })
        .on('restart', function (ev) {
            console.log('*** nodemon restart ***');
            console.log('\n*** for file changes:' + ev);
            setTimeout(function () {
                var bs = browerSync.get(BROWSER_SYNC_SERVER);
                bs.notify('reloading now ...');
                bs.reload({stream: false});
            }, 1000);
        })
        .on('crash', function (ev) {
            console.log('*** nodemon crash for ***\n' + ev);
        })
        .on('exit', function () {
            console.log('*** nodemon exit ***');
        })
});

gulp.task('webpack-dev-server', function () {
    // modify some webpack config options
    var config = require('./webpack.config.dev');

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(config), {
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});

/**
 *  browser-sync开发服务器
 * */

function startBrowserSync(isDev) {
    if (browerSync.has(BROWSER_SYNC_SERVER)) return;
    //
    console.log('init browser sync');
    var config = require(isDev ? './webpack.config.dev' : './webpack.config.prod');
    var compiler = webpack(config);

    var bs = browerSync.create(BROWSER_SYNC_SERVER);

    bs.init({
        proxy: 'http://localhost:3000',
        port: process.env.PORT || 8000,
        // server: {
        //     base: ['build']
        // },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true
                }
            })
        ],
        injectChanges: true,
        // 客户端文件的变更由webpack监听，所以这里记录不到文件变化
        logFileChanges: true,
        logLevel: 'info',
        logPrefix: 'Hello BrowserSync',
        notify: true,
        reloadDelay: 0
    });
}


/**
 * 代码校验js、html、css
 *
 * @dependencies：
 *
 * eslint-path-formatter
 * gulp-eslint
 *
 * gulp-stylelint
 * stylelint-config-standard
 *
 * gulp-html-lint
 *
 * npm install --save-dev --registry https://registry.npm.taobao.org
 * */

// es5
// es6
var eslintConfig = require('./eslint.config');
gulp.task('js-lint', function () {

    return gulp.src(paths.lint)
        .pipe(eslint(eslintConfig))
        // .pipe(eslint.format())
        .pipe(eslint.format('node_modules/eslint-path-formatter'))
        .pipe(eslint.failAfterError());

});

// scss lint
gulp.task('scss-lint', function () {

    return gulp.src(paths.scss)
        .pipe()
});

// css lint
var styleLintConfig = require('./stylelint.config');
gulp.task('css-lint', function () {

    return gulp.src(paths.css)
        .pipe(styleLint({
            config: styleLintConfig,
            failAfterError: true,
            reportOutputDir: 'reports/csslint',
            reporters: [
                {formatter: 'string', console: true},
                {formatter: 'json', save: 'report.json'},
            ],
            debug: true
        }));
});

// html lint
var htmlLintConfig = require('./htmllint.config');
gulp.task('html-lint', function () {

    return gulp.src(paths.html)
        .pipe(htmlLint({
            // htmllintrc: "htmllintrc",
            useHtmllintrc: false,
            limitFiles: 2,
            rules: htmlLintConfig
        }))
        .pipe(htmlLint.format())
        .pipe(htmlLint.failAfterError())
});