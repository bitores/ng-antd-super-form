import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from './utils';
import { SFTableComponent } from './table.component';
import { SFFormComponent } from './form.component';
import { FormLayout, FieldConfig } from './interface';


@Component({
  selector: 'ng-antd-super-form',
  template: `
<div class="super-form-style">
  <div class="super-form-formstyle" [ngStyle]="formStyle">
    <sf-form [layout]="search.layout" [formLayout]="search.formLayout" [configs]="search.data"
      [autoSearchEvent]="_autoSearchEvent" [_bindForm]="_bindForm">
    </sf-form>
  </div>
  <div class="super-form-tablestyle" [ngStyle]="tableStyle">
    <sf-table #tableRef [columns]="table.columns" [action]="table.action" [config]="table.props"
      [isInit]="table.isInit" [params]="_getSearchParams">
    </sf-table>
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
    data?: FieldConfig[];
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
  public tableRef: SFTableComponent;

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
