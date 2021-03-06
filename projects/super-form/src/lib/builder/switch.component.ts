import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, FormLayout } from '../interface';
@Component({
  selector: 'sf-switch',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label *ngIf="config.label" [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-switch 
      [formControlName]="config.key" 
      [nzCheckedChildren]="config.checkedChildren" 
      [nzUnCheckedChildren]="config.unCheckedChildren" 
      [nzSize]="config.size" 
      [nzLoading]="config.loading"
      [nzControl]="config.control"
      (click)="handleEvent($event, config.onClick)"
      (ngModelChange)="handleEvent($event, config.onChange)"
      ></nz-switch>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class SFSwitchComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: FormLayout;

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }

    let config = this.config;
    this.config = {
      noColon: false,
      size: 'default',
      loading: false,
      control: false,
      onChange: false,
      ...config
    }
  }

  handleEvent(e: any, callback?: Function) {
    callback && callback(e)
  }
}