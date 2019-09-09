import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-button',
  template: `
  <nz-form-item>
    <nz-form-control [nzSpan]="14" [nzOffset]="6">
      <button nz-button nzType="submit" [disabled]="config.disabled">{{config.label}}</button>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormButtonComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  constructor() { }

  ngOnInit() {
  }

}