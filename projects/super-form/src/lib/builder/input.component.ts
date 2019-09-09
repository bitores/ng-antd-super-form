import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-input',
  template: `
<nz-form-item [formGroup]="group">
  <nz-form-label [nzSm]="6" [nzXs]="24">{{config.label}}</nz-form-label>
  <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your username!">
      <input type="text" nz-input [formControlName]="config.name" [placeholder]="config.placeholder" />
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
  constructor() { }

  ngOnInit() {
  }

}