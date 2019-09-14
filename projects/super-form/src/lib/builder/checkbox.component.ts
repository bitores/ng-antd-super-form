import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
import { CheckboxValuePosterService } from '../service/checkbox-value-poster.service';

@Component({
  selector: 'app-form-checkbox',
  template: `
  <nz-form-item [formGroup]="group" *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol">
      <nz-checkbox-group  [formControlName]="config.key" (ngModelChange)="onChange($event)"></nz-checkbox-group>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormCheckboxComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

  checkboxVal = [];
  checkboxValObj = {};
  constructor(
    // private service: CheckboxValuePosterService
  ) { }

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




    this.group.get(`${this.config.key}`).setValue(this.config.options)
  }

  onChange(v) {
    let callback = this.config.onChange;
    callback && callback(v);
  }
}