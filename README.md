# Simple Appium Client for iOS and Android

## Install

- Install packages: `npm install`

## Setup

- open the files in the `configs` folder to go thru the variables to make sure you have your information set, apiKey, etc.


## Appium Setup

- these tests use the Axe Plugin for Appium - this cannot be installed to the WebdriverIO Appium Service.  To this end you need to install the plugin into your own Appium Server.
- the test are configured to use your own local Appium server rather than the embedded Appium service


## Run the app

Make sure Appium is started and running before running the app here.

- check `package.json` for details of how to run the test for your specific target