import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-rate',
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-rate
          [formControlName]="config.key"
          [nzAllowHalf]="config.allowHalf"
          [nzAutoFocus]="config.autoFocus"
          [nzCharacter]="config.character?character:star"
          [nzCount]="config.count"
          [nzTooltips]="config.tooltips"
          (ngModelChange)="handleEvent($event, config.onModelChange)"
          (nzOnHoverChange)="handleEvent($event, config.onHoverChange)"
          (nzOnKeyDown)="handleEvent($event, config.onKeyDown)"
        ></nz-rate>
      <div nz-form-explain>{{config.explain}}</div>
      <ng-template #star>
        <i nz-icon nzType="star"></i>
      </ng-template>
      <ng-template #character>{{config.character}}</ng-template>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormRateComponent implements OnInit {
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
      allowHalf: false,
      autoFocus: false,
      count: 5,
      tooltips: [],
      ...config
    }
  }

  handleEvent(e, callback) {
    callback && callback(e)
  }

}