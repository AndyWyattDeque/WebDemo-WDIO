// wdio.shared.local.appium.conf.ts
import {config as baseConfig } from './wdio.base.conf';
import merge from 'deepmerge';

// ===================
// Test Configurations
// ===================
//
export const config: WebdriverIO.Config = merge(baseConfig, {
    runner: 'local',
    services: [],
    port: 4723,
    path: '/'
});