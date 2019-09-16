import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldConfig } from '../interface';

import { UploadFile } from 'ng-zorro-antd/upload';


@Component({
  selector: 'upload-control',
  template: `
  <nz-upload 
    [nzDisabled]="config.disabled"
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
    [nzName]="config.name"
    [nzWithCredentials]="config.withCredentials"
    [nzListType]="config.listType"
    [nzMultiple]="config.multiple"       
    [nzShowUploadList]="config.showUploadList"
    [nzShowButton]="showButton"
    [nzOpenFileDialogOnClick]="config.openFileDialogOnClick"
    [nzPreview]="handlePreview"
    (nzChange)="handleEvent($event, changeFileList)"
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
    <ng-template  *ngSwitchCase="'theme4'" #theme>
    </ng-template>
  </nz-upload>
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
  `,
  styles: [`
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
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadControlComponent),
      multi: true
    }
  ]
})
export class UploadControlComponent implements ControlValueAccessor {
  @Input() config: FieldConfig;
  @Input() disabled: boolean = false;
  //
  previewImage: string | undefined = '';
  previewVisible = false;
  //
  showButton: boolean = true;
  fileList: object[] = [];

  // Function to call when the rating changes.
  onChange = (fileList: object[]) => {
    console.log(this)
  };

  changeFileList = (fileList: object[]) => {
    this.fileList = fileList;
    if (this.fileList.length >= this.config.maxCount) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
    this.onChange(this.value);
  }

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  get value(): object[] {
    return this.fileList;
  }

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(fileList: object[]): void {
    console.log('write==')
    this.fileList = fileList || [];
    this.onChange(this.value)
  }


  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (fileList: object[]) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  handleEvent = (e, callback) => {
    console.log(e)
    callback && callback(e.fileList)
  }
}

@Component({
  selector: 'app-form-upload',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormUploadComponent,
    multi: true
  }],
  template: `
  <nz-form-item [formGroup]="group"  *ngIf="config.visible!==false">
    <nz-form-label [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <upload-control
        [formControlName]="config.key"
        [config]="config"
      ></upload-control>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})



export class FormUploadComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;

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
      maxCount: Infinity,
      ...config
    }
  }
}