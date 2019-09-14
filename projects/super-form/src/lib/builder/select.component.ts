import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-select',
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol">
      <nz-select [formControlName]="config.key" [nzPlaceHolder]="config.placeholder">
        <nz-option *ngFor="let option of config.options" [nzValue]="option.value" [nzLabel]="option.label"></nz-option>
      </nz-select>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormSelectComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;
  constructor() { }

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config;
    this.config = {
      noColon: false,
      ...config
    }
  }

}