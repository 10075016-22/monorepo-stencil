/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@stencil-nx-project/shared-ui/components';

import { defineCustomElement as defineMyInput } from '@stencil-nx-project/shared-ui/components/my-input.js';
@ProxyCmp({
  defineCustomElementFn: defineMyInput,
  inputs: ['disabled', 'label', 'name', 'placeholder', 'required', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'name', 'placeholder', 'required', 'type', 'value'],
  outputs: ['myChange', 'myInput', 'myBlur', 'myFocus'],
})
export class MyInput {
  protected el: HTMLMyInputElement;
  @Output() myChange = new EventEmitter<CustomEvent<string>>();
  @Output() myInput = new EventEmitter<CustomEvent<string>>();
  @Output() myBlur = new EventEmitter<CustomEvent<void>>();
  @Output() myFocus = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyInput extends Components.MyInput {

  myChange: EventEmitter<CustomEvent<string>>;

  myInput: EventEmitter<CustomEvent<string>>;

  myBlur: EventEmitter<CustomEvent<void>>;

  myFocus: EventEmitter<CustomEvent<void>>;
}


