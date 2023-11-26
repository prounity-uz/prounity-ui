import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  globalScript: './src/globals/global.ts',
  globalStyle: './src/globals/global.css',
  namespace: 'pu-ui',
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    // },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'pro-unity-ui-stencil',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
  ],
  plugins: [
    // sass({

    // })
    sass({
      injectGlobalPaths: [
        'src/globals/index.scss',
      ]
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
