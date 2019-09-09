import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-select',
  template: `
  <nz-form-item [formGroup]="group">
    <nz-form-label [nzSpan]="6">{{config.label}}</nz-form-label>
    <nz-form-control [nzSpan]="14">
      <nz-select [formControlName]="config.name" [nzPlaceHolder]="config.placeholder">
        <nz-option *ngFor="let option of config.options" [nzValue]="option" [nzLabel]="option"></nz-option>
      </nz-select>
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
  constructor() { }

  ngOnInit() {
  }

}