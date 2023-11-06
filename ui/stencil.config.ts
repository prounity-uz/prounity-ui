import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'prounity-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '@prounity/ui',
      proxiesFile: '../packages/react/src/components/stencil-generated/index.ts',
      // proxiesFile: '../packages/react/src/components/proxies.ts',
    }),
    // reactOutputTarget({
    //   componentCorePackage: '@prounity/ui',
    //   includeImportCustomElements: false,
    //   includePolyfills: false,
    //   includeDefineCustomElements: false,
    // proxiesFile: '../packages/react/src/components/proxies.ts',
    //   excludeComponents: ['my-component'],
    //   // proxiesFile: '../packages/react/lib/components/stencil-generated/index.ts',
    // }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
