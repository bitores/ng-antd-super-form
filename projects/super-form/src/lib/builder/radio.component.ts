import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-radio',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-form-item [formGroup]="group">
    <nz-form-control [nzSpan]="14" [nzOffset]="6">
      <label nz-radio [formControlName]="config.name" *ngFor="let item of config.options; let i = index" [nzValue]="item">
        <span>{{item}}</span>
      </label>
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
  constructor() { }

  ngOnInit() {
  }

}