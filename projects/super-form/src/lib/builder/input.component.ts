import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-input',
  template: `
<nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
  <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzFor]="config.key">{{config.label}}</nz-form-label>
  <nz-form-control [nzSm]="formLayout.wrapperCol"  [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <input type="text" nz-input [formControlName]="config.key" [placeholder]="config.placeholder" />
  </nz-form-control>
</nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormInputComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;
  constructor() { }

  ngOnInit() {
  }

}