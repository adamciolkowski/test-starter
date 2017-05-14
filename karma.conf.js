const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        basePath: 'src',
        frameworks: ['mocha', 'chai'],
        files: [
            "**/*.spec.*"
        ],
        preprocessors: {
            '**/*.spec.*': ['webpack']
        },
        webpack: {
            devtool: 'cheap-module-source-map',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            node: {
                __filename: true
            }
        },
        reporters: ['mocha', 'notify'],
        mochaReporter: {
            showDiff: true
        },
        port: 9876,
        colors: true,
        browsers: ['PhantomJS'],
        webpackMiddleware: {
            stats: 'error-only'
        }
    })
};