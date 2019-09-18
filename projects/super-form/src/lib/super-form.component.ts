import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from './utils';
import { DynamicTableComponent } from './dynamic-table.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormLayout } from './interface';


@Component({
  selector: 'ng-antd-super-form',
  template: `
<div class="super-form-style">
  <div class="super-form-formstyle" [ngStyle]="formStyle">
    <dynamic-form [layout]="search.layout" [formLayout]="search.formLayout" [configs]="search.data"
      [autoSearchEvent]="_autoSearchEvent" [_bindForm]="_bindForm">
    </dynamic-form>
  </div>
  <div class="super-form-tablestyle" [ngStyle]="tableStyle">
    <dynamic-table #tableRef [columns]="table.columns" [action]="table.action" [config]="table.props"
      [isInit]="table.isInit" [params]="_getSearchParams">
    </dynamic-table>
  </div>
</div>
  `,
  styles: [
    `
    .super-form-formstyle, .super-form-tablestyle{
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    `
  ]
})
export class SuperFormComponent {
  @Input() search: {
    data?: any;
    layout: string;
    formLayout: FormLayout;
  };
  @Input() table: {
    action: Function;
    isInit: boolean;
    columns: object[];
    props: any;
  };
  @Input() formStyle: object = {};
  @Input() tableStyle: object = {};

  @ViewChild('tableRef', { static: false })
  public tableRef: DynamicTableComponent;

  form: FormGroup;


  constructor(private fb: FormBuilder) { }

  reset(needLoad = true) {
    this.tableRef.reset(needLoad)
  }

  // 由子类进行实现或重写  autoSearchEvent
  refresh = () => {
    this.tableRef.refresh()
  }

  _autoSearchEvent = () => {
    return this.reset();
  }
  // params
  _getSearchParams = () => {
    return filter(this.form.value)
  }
  // _bindForm
  _bindForm = (form: FormGroup) => {
    this.form = form;
  }
}
