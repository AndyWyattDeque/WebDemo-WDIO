import {config as baseConfig} from './wdio.base.conf';
import {SauceRegions} from '@wdio/types/build/Options';
import merge from 'deepmerge';
import { Capabilities } from '@wdio/types';

// =====================
// Sauce specific config
// =====================
export const config: WebdriverIO.Config = merge(baseConfig, {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    Capabilities: [],

// If you run your test on Sauce Labs you can specify the region you want to run your test
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
    region: (process.env.REGION || 'eu') as SauceRegions,

    build: 'Deque Accessibility Build',

    name: 'Andy-Test',

// =============================================
// Max instances of the same device in the cloud
// =============================================
    maxInstances: 20,

});

// ========
// Services
// ========
config.services = (config.services || []).concat('sauce');