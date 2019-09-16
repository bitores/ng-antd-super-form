import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-slider',
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-slider
          [formControlName]="config.key"
          [nzRange]="config.range"
          [nzDots]="config.dots"
          [nzIncluded]="config.included"
          [nzVertical]="config.vertical"
          [nzMin]="config.min"
          [nzMax]="config.max"
          [nzStep]="config.step"
          [nzTipFormatter]="config.tipFormatter"
          [nzTooltipVisible]="config.tooltipVisible"
          [nzMarks]="config.marks"
          (ngModelChange)="handleEvent($event, config.onModelChange)"
          (nzOnAfterChange)="handleEvent($event, config.onAfterChange)"
        ></nz-slider>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormSliderComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config;
    this.config = {
      dots: false,
      included: true,
      max: 100,
      min: 0,
      range: false,
      step: 1,
      vertical: false,
      tooltipVisible: 'default',
      tipFormatter: null,
      marks: null,
      ...config
    }
  }

  handleEvent(e, callback) {
    callback && callback(e)
  }

}