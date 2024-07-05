describe('iOS App flow', () => {
    it('should run some simple tests against the sample iOS app', async () => {
                try {
                    // This will start the accessibility scan and upload the results to Dashboard
                    const result = await driver.execute('axe:scan', axeSettings);
                } finally {
                    await driver.pause(3000);
                    await driver.terminateApp('');
                    await driver.removeApp('');
                    //await driver.deleteSession();
                }
    })
})