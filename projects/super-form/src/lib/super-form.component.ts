import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from './utils';
import { DynamicTableComponent } from './dynamic-table.component';
import { DynamicFormComponent } from './dynamic-form.component';


@Component({
  selector: 'ng-antd-super-form',
  templateUrl: './super-form.component.html',
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
  @Input() search: object = {};
  @Input() table: object = {};
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
  _bindForm = (form) => {
    this.form = form;
  }
}
