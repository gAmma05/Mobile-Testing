const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      platform: 'Android',
      desiredCapabilities: {
        'platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:app': 'D:/Work/STUDY/SWT301/mobile_testing/DateTimeValidator/app/build/outputs/apk/debug/app-debug.apk',
        'appium:appPackage': 'com.example.datetimevalidator',
        'appium:appActivity': '.MainActivity',
        'appium:newCommandTimeout': 300
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  plugins: {
    pauseOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true,
      retries: 1
    },
    screenshotOnFail: {
      enabled: true
    },
    htmlReporter: {
      enabled: true
    }
  },
  name: 'codeceptjs'
};
