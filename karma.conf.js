// Karma configuration
module.exports = function (config) {
    // config.set({option: value, option: value,...})
    // we can use many config.set() to set config
    // (ex: config.set({...}); config.set({...});)
    // but if it has the same configuration options,
    // the latter value will cover the previous value
    config.set({

        // base path that will be used to resolve all patterns
        // (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'detectBrowsers'],

        // list of files / patterns to load in the browser
        files: [
            'index.js',
            'test/*.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'summary', 'coverage', 'coverage-html-index'],

        summaryReporter: {
            // 'failed', 'skipped' or 'all'
            show: 'all',
            // Show an 'all' column as a summary
            overviewColumn: true
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'index.js': ['coverage']
        },

        // optionally, for detectBrowsers package settings
        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: false,

            // use headless mode, for browsers that support it, default is false
            preferHeadless: true
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // config.LOG_DISABLE
        // config.LOG_ERROR
        // config.LOG_WARN
        // config.LOG_INFO
        // config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file
        // and executing tests whenever any file changes
        autoWatch: true,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // optionally, configure the reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html' },
                { type: 'text-summary' }
            ]
        }
    });
};

