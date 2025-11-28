import { APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '@stencil-nx-project/shared-ui/loader';
import { DIRECTIVES } from './stencil-generated';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';

const DECLARATIONS = [
    ...DIRECTIVES,
    TextValueAccessor,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [CommonModule],
})
export class UiComponentsModule {
    static forRoot(): ModuleWithProviders<UiComponentsModule> {
        return {
            ngModule: UiComponentsModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: () => {
                        return () => defineCustomElements(window);
                    },
                    multi: true,
                    deps: [NgZone],
                },
            ],
        };
    }
}