import {config} from './wdio.shared.conf';

// ===================
// Test Configurations
// ===================
//
config.services = [
    [
        'appium', {
            logPath: './logs',
            args: {
                address: 'localhost',
                port: 4723,
            },
            command: 'appium',
        },
    ],
];

export default config;