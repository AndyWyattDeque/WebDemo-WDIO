import type { Options } from '@wdio/types'
import {join} from "path";

exports.config = {
    runner: 'local',
    specs: [
        '../test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:options': {
            'automationName': 'UiAutomator2',
            'deviceName': 'emulator-5554',
            'orientation': 'PORTRAIT',
            'app': join(
                __dirname,
                '../',
                './apps/app-sample-debug.apk',
            ),
            'appWaitActivity': '.MainActivity',
            'appPackage': 'com.deque.mobile.axedevtoolssampleapp',
            'noReset': true,
            'newCommandTimeout': 240,
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    port: 4723,
    path: '/',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Hook to initialize axeDevToolsMobile plugin
    //beforeSession: async function (config, capabilities, specs) {
     //   const { initAxeDevTools } = require('axe-devtools-mobile');
    //    await initAxeDevTools(capabilities);
   // },
}