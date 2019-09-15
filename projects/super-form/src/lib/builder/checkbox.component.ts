import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';

@Component({
  selector: 'app-form-checkbox',
  template: `
  <nz-form-item [formGroup]="group" *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzHasFeedback]="config.hasFeedback" [nzValidateStatus]="group.get(config.key)" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
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

  validateStatus: string;

  ngOnInit() {
    // console.log('??', this.group.controls[this.config.key])
    // 自定义验证器: 至少一个选项
    // (control) => {
    //   if (control.value) {
    //     let ret = control.value.filter(item => item.checked)
    //     if (ret.length < 1) {
    //       return {
    //         valid: false
    //       }
    //     }
    //     return null;
    //   }
    //   return null;
    // }

    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config;
    this.config = {
      noColon: false,
      validateStatus: 'success',
      ...config
    }

    // [(ngModel)]="config.options"
    this.group.get(`${this.config.key}`).setValue(this.config.options)
  }

  onChange(v) {
    let callback = this.config.onChange;
    callback && callback(v);
  }
}