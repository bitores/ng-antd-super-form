import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter } from './utils';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormLayout } from './interface';

@Component({
  selector: 'sf-modal',
  template: `
  <nz-modal 
    [nzMaskClosable]="maskClosable"
    [nzWidth]="width"
    [nzVisible]="isVisible" 
    [nzTitle]="title"
    [nzCancelText]="cancelText"
    [nzOkText]="okText"
    [nzOkType]="okType"
    (nzAfterClose)="handleEvent(afterClose, _afterClose)"
    (nzOnCancel)="handleEvent(onCancel, _onCancel)" 
    (nzOnOk)="handleEvent($event, _onOk)"
  >
    <sf-form [layout]="search.layout" [formLayout]="search.formLayout" [configs]="search.data" [_bindForm]="_bindForm"></sf-form>
  </nz-modal>
  `,
  styles: [
    `
    `
  ]
})
export class SFModalComponent implements OnInit {
  @Input() maskClosable: boolean = false;
  @Input() visible: boolean = false;
  @Input() title: string;
  @Input() footer: string | TemplateRef<{}> | null;
  @Input() cancelText: string = '取消';
  @Input() okText: string = '确定';
  @Input() okType: string = 'primary';
  @Input() width: string | number = 520;
  @Input() zIndex: number = 1000;
  @Input() onCancel: Function;
  @Input() onOk: Function;
  @Input() afterClose: Function;

  //
  @Input() search: {
    data?: any;
    layout: string;
    formLayout: FormLayout;
  };

  action: boolean | Function = false;
  extraParams?: Function;
  actionError?: Function;
  actionSuccess?: Function;
  valueMap?: Function;

  isVisible: boolean = false;
  form: FormGroup;
  @Input() ref: Function | null;

  //
  modal: NzModalService;

  constructor(modal: NzModalService) {
    this.modal = modal;
  }

  ngOnInit(): void {
    this.isVisible = this.visible;
    this.ref && this.ref(this)
  }

  show(isShow: boolean = true, callback?: Function) {
    this.isVisible = isShow;
    callback && callback()
  }

  info(...prop: any[]) {
    this.modal.info(...prop)
  }

  success(...prop: any[]) {
    this.modal.success(...prop)
  }

  error(...prop: any[]) {
    this.modal.error(...prop)
  }

  warning(...prop: any[]) {
    this.modal.warning(...prop)
  }

  confirm(...prop: any[]) {
    this.modal.confirm(...prop)
  }

  // 处理 自动 action start
  autoHandleSubmit = () => {
    const {
      action,
      extraParams = {},
      actionError = (res: any) => { console.log(res) },
      actionSuccess = (res: any) => { console.log(res) },
      valueMap = (res: any) => {
        return {
          status: res.status
        }
      },
    } = this;
    let _val = typeof extraParams === "function" ? extraParams() : extraParams;
    let values: {
      [props: string]: any;
    } = {
      ..._val,
      ...this._getSearchParams()
    }
    if (typeof action == 'function') {
      action(values).then((res: any) => {
        const { status } = valueMap(res)
        if (status) {
          this.show(false, () => actionSuccess('操作成功'))
        } else {
          actionError(res.message)
        }
      }).catch((err: any) => {
        actionError(err.message)
      })
    }

  }
  // 处理 自动 action end

  _onOk = (e: any) => {
    if (this.action === false) {
      this.onOk(e, this.form, (f: any) => this.show(f))
    } else {
      this.autoHandleSubmit()
    }
  }

  _onCancel = (callback: Function) => {
    this.show(false, callback)
  }

  _afterClose = (callback: Function) => {
    this.form.reset()
    callback && callback()
  }

  _getSearchParams() {
    return filter(this.form.value)
  }

  _bindForm = (form: FormGroup) => {
    this.form = form;
  }

  handleEvent(e: any, callback: Function) {
    callback && callback(e)
  }
}
