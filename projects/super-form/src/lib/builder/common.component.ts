import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';
@Component({
  selector: 'app-form-button',
  template: `
  <ng-container  [ngSwitch]="config.type">
    <br  *ngSwitchCase="'br'"/>
    <nz-form-item  *ngIf="config.visible!==false">
      <nz-divider *ngSwitchCase="'divider'" [nzType]="config.nzType" [nzText]="config.text" [nzOrientation]="config.orientation" [nzDashed]="config.dashed"></nz-divider>
      <nz-form-control [nzSm]="formLayout.wrapperCol" [ngSwitch]="config.type"  [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
        <div *ngSwitchCase="'explain'" nz-form-explain>{{config.explain}}</div>
      </nz-form-control>
    </nz-form-item>
  </ng-container>
  
  `,
  styles: [
    `
    `
  ]
})
export class FormCommonComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config, _config = {};
    switch (this.config.type) {
      case "divider": {
        _config = {
          dashed: false,
          nzType: 'horizontal',
          orientation: 'center'
        }

      }

        break;

      default:
        break;
    }
    this.config = {
      ..._config,
      ...config,
    }
  }

  handleEvent(e, callback) {
    callback && callback(e)
  }
}