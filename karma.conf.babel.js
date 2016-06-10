import kChai from 'karma-chai';
import kPhantomJsLauncher from 'karma-phantomjs-launcher';
import kPhantomJsShim from 'karma-phantomjs-shim';
import kMocha from 'karma-mocha';
import kMochaReporter from 'karma-mocha-reporter';


export default (config) => {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files/patterns to load in the browser
    //files: [{pattern: 'spec.bundle.js', watched: false}],

    // files to exclude
    exclude: [],

    plugins: [
      kChai,
      kPhantomJsLauncher,
      kPhantomJsShim,
      kMocha,
      kMochaReporter
    ],


    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
}
