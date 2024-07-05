const axeSettings = {
    apiKey: process.env.AXE_MOBILE_API_KEY,// axe API key, required by axe DevTools Mobile
}

describe('Android App flow', () => {
    it('should run some simple tests against the sample Android app',
        async () => {
            try {
                // click on "Start XML" button with text
                const startXMLButton = await $('//android.widget.Button[@text="Start XML"]');
                await startXMLButton.click();
                const result = await driver.execute('axe:scan', axeSettings);

                // click on "Next" button
                const nextButton = await driver.$('//android.widget.Button[@text="Next"]');
                await nextButton.click();
                await driver.execute('axe:scan', axeSettings);

                // click on a View with content description "Catalog"
                const catalogButton = await driver.$('//android.widget.FrameLayout[@content-desc="Catalog"]');
                await catalogButton.click();
                await driver.execute('axe:scan', axeSettings);
            } finally {
                await driver.pause(3000);
                await driver.terminateApp('com.deque.mobile.axedevtoolssampleapp');
                await driver.removeApp('com.deque.mobile.axedevtoolssampleapp');
                //await driver.deleteSession();
            }
        })
})