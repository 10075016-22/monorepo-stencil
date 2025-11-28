import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
    namespace: 'ui-components',
    srcDir: 'src',
    tsconfig: 'tsconfig.stencil.json',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null,
        },
        // Angular proxy generation
        angularOutputTarget({
            componentCorePackage: '@stencil-nx-project/shared-ui',
            directivesProxyFile: '../shared-ui-angular/src/lib/stencil-generated/components.ts',
            directivesArrayFile: '../shared-ui-angular/src/lib/stencil-generated/index.ts',
            valueAccessorConfigs: [
                {
                    elementSelectors: ['my-input'],
                    event: 'myChange',
                    targetAttr: 'value',
                    type: 'text',
                },
            ],
        }),
        reactOutputTarget({
            outDir: '../shared-ui-react/src/generated',
        }),
        vueOutputTarget({
            componentCorePackage: '@stencil-nx-project/shared-ui',
            proxiesFile: '../shared-ui-vue/src/generated/components.ts',
            includeImportCustomElements: true,
            includeDefineCustomElements: false,
        }),
    ],
    testing: {
        browserHeadless: 'new',
    },
};