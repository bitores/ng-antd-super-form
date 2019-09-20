import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldConfig, FormLayout } from '../interface';


@Component({
  selector: 'sf-group',
  template: `
    <div nz-form nzLayout="inline">
    <ng-container *ngFor="let child of config.children" sfField [config]="child" [group]="group" [formLayout]="formLayout" [autoSearchEvent]="autoSearchEvent"></ng-container>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class SFGroupComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: FormLayout;
  autoSearchEvent: Function;

  constructor() { }

  ngOnInit() {
    // this.formLayout = {
    //   labelCol: null,
    //   wrapperCol: null
    // };

    this.config.children.map((item: any) => {
      if (item.validations && item.validations.indexOf(Validators.required) > -1) {
        item.required = true;
      }
    })
  }
}
