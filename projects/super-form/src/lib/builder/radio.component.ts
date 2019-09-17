import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-radio',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label *ngIf="config.label" [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-radio-group [formControlName]="config.key" [nzSize]="config.size" [nzDisabled]="config.disabled" (ngModelChange)="handleEvent($event, config.onChange)">
        <label nz-radio  *ngFor="let item of config.options; let i = index" [nzValue]="item.value" [nzDisabled]="item.disabled">
          <span>{{item.label}}</span>
        </label>
      </nz-radio-group>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormRadioComponent implements OnInit {
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

  handleEvent(e, callback) {
    callback && callback(e, this.group)
  }
}