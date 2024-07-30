import { strictEqual } from 'assert';
import { AxeResults } from 'axe-core';

describe('Deque Cook Shop Spec', () => {
    it('should navigate to the Deque Cookshop website and do an accessibility scan', async () => {
        await browser.url('https://workshop2.dequelabs.com/');
        //const awesomeRecipes = await browser.$('#root > div > footer > p');
        //const isDisplayed = await awesomeRecipes.isDisplayed();
        //strictEqual(isDisplayed, true, 'Page not loaded');

        const axeResults: AxeResult = await browser.getAxeResults();
        const impactCounts = countImpactTypes(axeResults);

        console.log("**********************************************************************");
        console.log("*               R  E  S  U  L  T  S                                  *");
        console.log("*                                                                    *");
        console.log("* " + JSON.stringify(impactCounts) + "                                                                *");
        console.log("*                                                                    *");
        console.log("**********************************************************************");

        //strictEqual(result.violations.length, true, "Accessibility Issues Found");

        })

        it('then navigates to the blog page and scans that too for accessibility', async () => {
          const el1 = await browser.$('#root > div > nav > ul > li:nth-child(2) > a');
          await el1.click();
          await browser.$('#main-heading');

          //now check for accessibility again
          const axeResults: AxeResult = await browser.getAxeResults();
          const impactCounts = countImpactTypes(axeResults);

        console.log("**********************************************************************");
        console.log("*               R  E  S  U  L  T  S                                  *");
        console.log("*                                                                    *");
        console.log("* " + JSON.stringify(impactCounts) + "                                                                *");
        console.log("*                                                                    *");
        console.log("**********************************************************************");
        })
    })

    interface AxeResult {
        violations: {
          impact: string;
        }[];
      }

      function countImpactTypes(results: AxeResult): Record<string, number> {
        return results.violations.reduce((acc, violation) => {
          acc[violation.impact] = (acc[violation.impact] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
      } 
