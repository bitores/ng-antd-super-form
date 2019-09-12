import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
import { CheckboxValuePosterService } from '../service/checkbox-value-poster.service';

@Component({
  selector: 'app-form-checkbox',
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-control [nzSpan]="14" [nzOffset]="6">
      <label nz-checkbox [formControlName]="config.key" *ngFor="let item of config.options; let i = index" [nzValue]="item" >
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
export class FormCheckboxComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

  checkboxVal = [];
  checkboxValObj = {};
  constructor(
    private service: CheckboxValuePosterService
  ) { }

  ngOnInit() {
  }
  pushValue(check, item) {
    const haveItem = this.checkboxVal.includes(item);
    if (check) {
      if (!haveItem) {
        this.checkboxVal.push(item);
      }
    } else {
      if (haveItem) {
        this.checkboxVal = this.checkboxVal.filter((ele) => {
          return ele !== item;
        });
      }
    }
    this.checkboxValObj[this.config.key] = this.checkboxVal;
    this.service.postValue(this.checkboxValObj);


  }

}