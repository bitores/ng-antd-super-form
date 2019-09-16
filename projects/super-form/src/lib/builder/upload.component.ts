import { Component, OnInit, ViewEncapsulation, Directive, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldConfig } from '../interface';

import { UploadFile, UploadFilter } from 'ng-zorro-antd/upload';

// @Component({
//   selector: 'app-form-checkbox',
//   templateUrl: './form-checkbox.component.html',

// })
// class AppFormCheckboxComponent implements ControlValueAccessor {

//   value = []; // 组件对应的 “ ngModel ”
//   onChangeListener; // 改变值回调
//   onTouchedListener; // 交互回调

//   constructor() {
//   }

//   writeValue(obj: any): void {
//     this.value = obj; // form中给你设置了obj值，根据obj，去更新组件/UI
//   }

//   registerOnChange(fn: any): void {
//     this.onChangeListener = fn; // 保存这个函数
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouchedListener = fn; // 保存这个函数
//   }

//   /**
//    * 自定义当组件发生改变时，会调用的方法
//    */
//   onChange(payload) {
//     this.value = payload;
//     this.onChangeListener(payload); // 告诉form，你的表单值改变成了payload
//     this.onTouchedListener(); // 告诉form，你的表单有交互发生
//   }

// }


@Component({
  selector: 'app-form-upload',
  // encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormUploadComponent,
    multi: true
  }],
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <nz-upload 
        [formControlName]="config.key"
        [nzType]="config.nzType"
        [nzAccept]="config.accept"
        [nzAction]="config.action"
        [nzDirectory]="config.directory"
        [nzBeforeUpload]="config.beforeUpload"
        [nzCustomRequest]="config.customRequest"
        [nzData]="config.data"
        [nzFileList]="config.fileList"
        [nzLimit]="config.limit"
        [nzSize]="config.size"
        [nzFileType]="config.fileType"
        [nzFilter]="config.filter"
        [nzHeaders]="config.headers"
        [nzName]="config.name"
        [nzWithCredentials]="config.withCredentials"
        [nzListType]="config.listType"
        [nzMultiple]="config.multiple"       
        [nzShowUploadList]="config.showUploadList"
        [nzShowButton]="config.showButton"
        [nzOpenFileDialogOnClick]="config.openFileDialogOnClick"
        [nzPreview]="handlePreview"
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
      <nz-modal
        [nzVisible]="previewVisible"
        [nzContent]="modalContent"
        [nzFooter]="null"
        (nzOnCancel)="previewVisible=false"
      >
        <ng-template #modalContent>
          <img [src]="previewImage" [ngStyle]="{ width: '100%' }" />
        </ng-template>
      </nz-modal>
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

  //
  previewImage: string | undefined = '';
  previewVisible = false;


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
      ...config
    }
  }

  onChange(payload) {
    console.log('=', payload)
    let callback = this.config.onChange;
    callback && callback(payload);
    this.fileList = payload;
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
}