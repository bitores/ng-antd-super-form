import { Directive, Input, ComponentRef, ComponentFactoryResolver, ViewContainerRef, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig, Field } from '../interface';

import { components } from '../builder/index';


@Directive({
  selector: '[appDynamicField][config][group][formLayout]'
})
export class DynamicFieldDirective implements OnChanges, OnInit {
  @Input()
  config: FieldConfig;
  @Input()
  group: FormGroup;
  @Input()
  formLayout: object;
  component: ComponentRef<Field>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewcontainerRef: ViewContainerRef
  ) {

  }
  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.formLayout = this.formLayout;
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
    this.component.instance.formLayout = this.formLayout;
  }
}