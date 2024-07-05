import {join} from 'path';
import config from './wdio.conf';

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        // 'appium:deviceName': 'Pixel_3_10.0',
        //'appium:deviceName': 'Android',
        'appium:deviceName': 'emulator-5554',
        //clear'appium:platformVersion': '10.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(
            __dirname,
            '../',
            './apps/app-sample-debug.apk',
        ),
        // @ts-ignore
        'appium:appWaitActivity': '.MainActivity',
        'appium:appPackage': 'com.deque.mobile.axedevtoolssampleapp',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240}
];

exports.config = config;