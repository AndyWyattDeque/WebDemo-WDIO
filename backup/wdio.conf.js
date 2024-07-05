export const config = {
    // ...
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    axeMobileApiKey: process.env.AXE_MOBILE_API_KEY,
    region: 'eu', // or 'us' or 'apac'
    services: [
        ['sauce', {
            sauceConnect: false,
            sauceConnectOpts: {
                // ...
            }
        }]
    ],
    // ...
};