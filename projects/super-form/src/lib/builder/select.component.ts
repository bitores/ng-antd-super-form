import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, FormLayout } from '../interface';
@Component({
  selector: 'app-form-select',
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label *ngIf="config.label" [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-select 
        [formControlName]="config.key" 
        [ngStyle]="config.style"
        [nzDropdownRender]="config.dropdownRender?render:null"
        [nzPlaceHolder]="config.placeholder"
        [nzServerSearch]="config.serverSearch"
        [nzFilterOption]="config.filterOption"
        [nzShowSearch]="config.showSearch"
        [nzSize]="config.size"
        [nzMode]="config.mode"
        [nzMaxTagCount]="config.maxTagCount"
        [nzMaxTagPlaceholder]="tagPlaceHolder"
        [nzMaxMultipleCount]="config.maxMultipleCount"
        (nzScrollToBottom)="config.onScrollToBottom"
        (nzOnSearch)="config.onSearch"
      >
        <nz-option *ngFor="let option of config.options" [nzValue]="option.value" [nzLabel]="option.label"></nz-option>
      </nz-select>
      <ng-template #render>
        <nz-divider style="margin: 4px 0;"></nz-divider>
        <div style="padding: 8px; cursor: pointer" (click)="handleEvent($event, config.onClick)"><i nz-icon nzType="plus"></i>{{config.addTitle}}</div>
      </ng-template>
      <ng-template #tagPlaceHolder let-selectedList> 又选择了 {{ selectedList.length }} 个 </ng-template>
      <div nz-form-explain>{{config.explain}}</div>
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
  formLayout: FormLayout;

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config;
    this.config = {
      noColon: false,
      maxMultipleCount: Infinity,
      mode: 'default',
      addTitle: '添加',
      filterOption: () => false,
      ...config
    }
  }

  handleEvent(e: any, callback?: Function) {
    callback && callback(e)
  }

}