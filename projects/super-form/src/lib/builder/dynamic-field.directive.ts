import { Directive, Input, Type, ComponentRef, ComponentFactoryResolver, ViewContainerRef, OnChanges, OnInit } from '@angular/core';
// import {
//   NzInputNumberComponent,
//   NzCalendarComponent,
//   NzCardComponent,
//   NzSelectComponent,
//   NzRadioComponent,
//   NzOptionComponent,
//   NzCheckboxComponent,
//   NzButtonComponent
// } from 'ng-zorro-antd';

import { FormButtonComponent } from './button.component';
import { FormCheckboxComponent } from './checkbox.component';
import { FormInputComponent } from './input.component';
import { FormRadioComponent } from './radio.component';
import { FormSelectComponent } from './select.component';

import { FormGroup } from '@angular/forms';
import { FieldConfig, Field } from '../interface';


const components: { [type: string]: Type<Field> } = {
  input: FormInputComponent,
  button: FormButtonComponent,
  select: FormSelectComponent,
  radio: FormRadioComponent,
  // checkbox: FormCheckboxComponent
};
@Directive({
  selector: '[appDynamicField][config][group]'
})
export class DynamicFieldDirective implements OnChanges, OnInit {
  @Input()
  config: FieldConfig;
  @Input()
  group: FormGroup;
  component: ComponentRef<Field>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewcontainerRef: ViewContainerRef
    // ,private service: CheckboxValuePosterService
  ) {

  }
  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
  ngOnInit() {
    if (!components[this.config.type]) {
      const supporttedTypes = Object.keys(components).join(',');
      throw new Error(
        `supporttedTypes are ${supporttedTypes}, you `
      );
    }
    const componetFactory = this.componentFactoryResolver.resolveComponentFactory(components[this.config.type]);
    this.component = this.viewcontainerRef.createComponent(componetFactory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}