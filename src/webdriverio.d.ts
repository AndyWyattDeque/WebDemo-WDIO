// src/webdriverio.d.ts

import 'webdriverio';
import { AxeResults } from 'axe-core';

declare module 'webdriverio' {
  interface Browser {
    getAxeResults: () => Promise<AxeResults>;
  }
}
