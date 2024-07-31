import {config as baseConfig} from './wdio.shared.sauce.conf';
import merge from 'deepmerge';

export const config: WebdriverIO.Config = merge(baseConfig, {
    specs: ['../test/specs/**/chrome.browser.spec.ts'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
         'sauce:options': {
            screenResolution: '1920x1080',
            seleniumVersion: '4.0.0-beta-2'
        //     extendedDebugging: true,
        //     capturePerformance: true
        }
    }],
});