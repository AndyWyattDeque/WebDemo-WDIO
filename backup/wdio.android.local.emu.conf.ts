import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

// ==================
// Specify Test Files
// ==================
//
config.specs = ['../test/specs/android.spec.ts'];

// ============
// Capabilities
// ============
//
config.maxInstances = 1;
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

exports.config = config;