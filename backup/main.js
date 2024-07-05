const {remote} = require('webdriverio');
const path = require('path');

const runAndroidApp = true; // set to true to run the Android app, if false, will run iOS app

const axeSettings = {
  apiKey: process.env.AXE_MOBILE_API_KEY,// axe API key, required by axe DevTools Mobile
}

const iosCapabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:deviceName': 'iPhone 15 Pro',
  'appium:platformVersion': '17.5',
  'appium:udid': 'C958039D-015F-48DE-9D14-78FB09E037B4', // run in terminal: xcrun simctl list | grep Booted,
  'appium:bundleId': 'com.dequesystems.axe-devtools-ios-sample-app',
}

const androidCapabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:app': path.join(__dirname, './app-sample-debug.apk'),
  'appium:appActivity': '.MainActivity',
  'appium:appPackage': 'com.deque.mobile.axedevtoolssampleapp',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities: runAndroidApp ? androidCapabilities : iosCapabilities
}

async function runTest() {
  if (runAndroidApp) {
    await scanAndroidApp();
  } else {
    await scaniOSApp();
  }
}

async function scaniOSApp() {
  const driver = await remote(wdOpts);
  try {
    // This will start the accessibility scan and upload the results to Dashboard
    const result = await driver.execute('axe:scan', axeSettings);
  } finally {
    // await driver.pause(1000);
    await driver.deleteSession();
  }
}

async function scanAndroidApp() {
  const driver = await remote(wdOpts);
  try {
    // click on "Start XML" button with text
    const startXMLButton = await driver.$('//android.widget.Button[@text="Start XML"]');
    await startXMLButton.click();
    await driver.execute('axe:scan', axeSettings);

    // click on "Next" button
    const nextButton = await driver.$('//android.widget.Button[@text="Next"]');
    await nextButton.click();
    await driver.execute('axe:scan', axeSettings);

    // click on a View with content description "Catalog"
    const catalogButton = await driver.$('//android.widget.FrameLayout[@content-desc="Catalog"]');
    await catalogButton.click();

    // This will start the accessibility scan and upload the results to Dashboard
    await driver.execute('axe:scan', axeSettings);
  } finally {
    // await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
