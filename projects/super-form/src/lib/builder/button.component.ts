import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-button',
  template: `
  <nz-form-item  *ngIf="config.visible!==false">
    <nz-form-control [nzSm]="formLayout.wrapperCol">
      <button nz-button [nzType]="config.buttonType" [nzGhost]="config.ghost" [nzShape]="config.shape" [nzSize]="config.size" [nzLoading]="config.loading" [nzBlock]="config.block" [disabled]="config.disabled"><i nz-icon [nzType]="config.icon" *ngIf="config.icon!=undefined"></i>{{config.label}}</button>
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
  formLayout: object;
  constructor() {
    console.log('constr')
  }

  ngOnInit() {
    console.log('init...')
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
  }

}