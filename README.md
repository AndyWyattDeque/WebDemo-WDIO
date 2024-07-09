# Simple Appium Client for iOS and Android

## Install

- Install packages: `npm install`

## Setup

- open the files in the `configs` folder to go thru the variables to make sure you have your information set, apiKey, etc.


## LOCAL Appium 2 Setup

- Appium 2 is prerequisite
- these tests use the Axe Plugin for Appium - this cannot be installed to the WebdriverIO Appium Service.  To this end you need to install the plugin into your own Appium Server
- to launch with the Appium with the plugin installed:
    appium --use-plugins=axeDevToolsMobile
- the tests are configured to use your own local Appium server rather than the embedded Appium service


## Run the app

Make sure Appium is started and running before running the app here.

- check `package.json` for details of how to run the test for your specific target
: to run against local Android emulator run:
    npm run test.android.local.emu

: to run against local iOS simulator
    npm run test.ios.local.sim

: to run against Sauce Labs Android Real Device (NOTE: only real devices supported for Axe testing on Sauce), run:
    npm run test.android.sauce.emu.XX  where XX = us or eu depending on the region you need to run on