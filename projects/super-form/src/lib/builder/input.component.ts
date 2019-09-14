import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-input',
  template: `
<nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
  <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
  <nz-form-control [nzSm]="formLayout.wrapperCol" [ngSwitch]="config.type" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
    <nz-input-number *ngSwitchCase="'number'" [formControlName]="config.key" [nzPlaceHolder]="config.placeholder"  [nzSize]="config.size" [nzMax]="config.max" [nzMin]="config.min" [nzStep]="config.step" [nzPrecision]="config.precision" [nzFormatter]="config.formatter" [nzParser]="config.parser"></nz-input-number>
    <input *ngSwitchCase="'input'" [type]="config.nzType" [maxlength]="config.maxlength" nz-input [formControlName]="config.key" [placeholder]="config.placeholder" [nzSize]="config.size"/>
    <textarea *ngSwitchCase="'textarea'" nz-input [formControlName]="config.key" [placeholder]="config.placeholder" [nzSize]="config.size" [nzAutosize]="config.autosize" [rows]="config.rows"></textarea>
    <div nz-form-explain>{{config.explain}}</div>
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
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config, _config = {};
    switch (this.config.type) {
      case "number": {
        _config = {
          formatter: (v) => { console.log(v); return v },
          parser: (v) => { console.log(v); return v },
          precision: 2,
          step: 1,
          max: Infinity,
          min: -Infinity,
        }

      }

        break;
      case "input": {
        _config = {
          nzType: 'text'
        }
      }

        break;
      case "textarea": {
        _config = {
          autosize: false,
        }
      }

        break;

      default:
        break;
    }

    this.config = {
      noColon: false,
      ..._config,
      ...config
    }
  }

}