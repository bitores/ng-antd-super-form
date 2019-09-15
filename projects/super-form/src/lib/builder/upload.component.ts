import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface';

import { UploadFile, UploadFilter } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-form-switch',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-upload ngDefaultControl
        [formControlName]="config.key"
        [nzType]="config.nzType"
        [nzAccept]="config.accept"
        [nzAction]="config.action"
        [nzDirectory]="config.directory"
        [nzBeforeUpload]="config.beforeUpload"
        [nzCustomRequest]="config.customRequest"
        [nzData]="config.data"
        [nzFileList]="fileList"
        [nzLimit]="config.limit"
        [nzSize]="config.size"
        [nzFileType]="config.fileType"
        [nzFilter]="config.filter"
        [nzHeaders]="config.headers"
        [nzListType]="config.listType"
        [nzMultiple]="config.multiple"
        [nzName]="config.name"
        [nzShowUploadList]="config.showUploadList"
        [nzShowButton]="config.showButton"
        [nzWithCredentials]="config.withCredentials"
        [nzOpenFileDialogOnClick]="config.openFileDialogOnClick"
        [nzPreview]="config.preview"
        [nzRemove]="config.remove"
        (nzChange)="onChange($event)"
        [ngSwitch]="config.theme"
        >
        <button nz-button *ngSwitchCase="'theme1'">
          <i nz-icon [nzType]="config.icon"></i>
          <span>{{config.uploadTitle}}</span>
        </button>
        <div *ngSwitchCase="'theme2'">
          <i nz-icon [nzType]="config.icon"></i>
          <div class="u-ant-upload-text">{{config.uploadTitle}}</div>
        </div>
        <div *ngSwitchCase="'theme3'">
          <p class="ant-upload-drag-icon">
            <i nz-icon [nzType]="config.icon"></i>
          </p>
          <p class="u-ant-upload-text">{{config.uploadTitle}}</p>
          <p class="u-ant-upload-hint">{{config.subTitle}}</p>
        </div>
      </nz-upload>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    .u-upload-icon {
      font-size: 32px;
      color: #999;
    }
    .u-ant-upload-text {
      margin-top: 8px;
      color: #666;
    }
    .u-ant-upload-hint {
      padding: 10px;
    }
    `
  ]
})



export class FormUploadComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

  fileList: object[];

  constructor() { }

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config, _config = {};
    this.config = {
      noColon: false,
      directory: false,
      limit: 0,
      size: 0,
      filter: [],
      listType: 'text',
      multiple: false,
      name: 'file',
      showUploadList: true,
      showButton: true,
      withCredentials: false,
      openFileDialogOnClick: true,
      theme: 'theme2',
      icon: "plus",
      uploadTitle: '上传',
      subTitle: '',
      remove: () => {
        console.log('--', this.fileList)

      },
      ...config
    }
  }

  onChange(v) {
    console.log('=', v)
    let callback = this.config.onChange;
    callback && callback(v);
    if (v.stype === 'success') {
      this.fileList = v.fileList;
    }
  }

  onRemove() {
    console.log('==')
  }
}