import { Directive, Input, ComponentRef, ComponentFactoryResolver, ViewContainerRef, OnChanges, OnInit, ElementRef } from '@angular/core';

import { TableField } from '../interface/index';


@Directive({
  selector: '[appDynamicTable][columns][dataSource]'
})
export class DynamicTableDirective implements OnChanges, OnInit {
  @Input()
  columns: object[];
  @Input()
  dataSource: object[];

  constructor(private component: ElementRef) {
    console.log(component, this.columns, this.dataSource)
  }
  ngOnChanges() {
    // if (this.component) {
    //   this.component.columns = this.columns;
    //   this.component.instance.dataSource = this.dataSource;
    // }
  }
  ngOnInit() {
    // const componetFactory = this.componentFactoryResolver.resolveComponentFactory(components[this.config.type]);
    // this.component = this.viewcontainerRef.createComponent(componetFactory);
    // this.component.instance.columns = this.columns;
    // this.component.instance.dataSource = this.dataSource;
    console.log(this.columns, this.dataSource)
  }
}