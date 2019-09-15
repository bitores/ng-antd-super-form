import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-switch',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [ngSwitch]="config.type" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-year-picker *ngSwitchCase="'yearpicker'" [formControlName]="config.key" [nzAllowClear]="config.allowClear" [nzSize]="config.size" [nzPlaceHolder]="config.placeholder" [nzFormat]="config.format" (ngModelChange)="onChange($event)" (nzOnOpenChange)="onOpenChange($event)"></nz-year-picker>
      <nz-month-picker *ngSwitchCase="'monthpicker'" [formControlName]="config.key" [nzAllowClear]="config.allowClear" [nzSize]="config.size" [nzPlaceHolder]="config.placeholder" [nzFormat]="config.format" (ngModelChange)="onChange($event)" (nzOnOpenChange)="onOpenChange($event)"></nz-month-picker>
      <nz-week-picker *ngSwitchCase="'weekpicker'" [formControlName]="config.key" [nzAllowClear]="config.allowClear" [nzSize]="config.size" [nzPlaceHolder]="config.placeholder" [nzFormat]="config.format" (ngModelChange)="onChange($event)" (nzOnOpenChange)="onOpenChange($event)"></nz-week-picker>
      <nz-date-picker *ngSwitchCase="'datepicker'" [formControlName]="config.key" [nzAllowClear]="config.allowClear" [nzSize]="config.size" [nzPlaceHolder]="config.placeholder" [nzFormat]="config.format" (ngModelChange)="onChange($event)" (nzOnOpenChange)="onOpenChange($event)" 
        [nzShowToday]="config.showToday"
        [nzShowTime]="config.showTime"
        (nzOnOk)="config.onOk($event)"
      ></nz-date-picker>
      <nz-range-picker *ngSwitchCase="'rangepicker'" [formControlName]="config.key" [nzAllowClear]="config.allowClear" [nzSize]="config.size" [nzPlaceHolder]="config.placeholder" [nzFormat]="config.format" (ngModelChange)="onChange($event)" (nzOnOpenChange)="onOpenChange($event)" 
        [nzShowTime]="config.showTime" 
        (nzOnOk)="config.onOk($event)"
      ></nz-range-picker>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormDatePickerComponent implements OnInit {
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
      case "datepicker": {
        _config = {
          ..._config,
          format: "yyyy-MM-dd",
          showToday: true,
          onOk() { }
        }
      }
        break;
      case "yearpicker": {
        _config = {
          ..._config,
          format: "yyyy"
        }
      }
        break;
      case "monthpicker": {
        _config = {
          ..._config,
          format: "yyyy-MM"
        }
      }
        break;
      case "weekpicker": {
        _config = {
          ..._config,
          format: "yyyy-ww"
        }
      }
        break;
      case "rangepicker": {
        _config = {
          ..._config,
          format: "yyyy-MM-dd",
          onOk() { }
        }
      }
        break;

      default:
        break;
    }

    this.config = {
      noColon: false,
      allowClear: true,
      autoFocus: false,
      ..._config,
      ...config,
    }
  }

  onChange(...props) {
    let callback = this.config.onChange;
    callback && callback(...props);
  }

  onOpenChange(...props) {
    let callback = this.config.onOpenChange;
    callback && callback(...props);
  }
}