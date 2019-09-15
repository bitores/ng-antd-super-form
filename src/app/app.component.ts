import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


import { FormComponent } from 'projects/super-form/src/lib/dynamic-form.component';
import { formsPool } from './formsPool';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicForm', { static: false })
  dynamicForm: FormComponent;

  // layout = 'inline';
  // formLayout = {
  //   labelCol: 6,
  //   wrapperCol: 14
  // }
  formFieldConfigs = formsPool['data'];

  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      render: (v, record) => {
        return `${v}`;
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      children: [
        {
          title: '详情',
          click(e, row) {
            console.log(e, row)
          }
        },
        {
          title: '删除',
          popconfirm: true,
          click(e, row) {
            console.log(e, row)
          }
        }
      ]
    },
  ]
  dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  onSubmit(event) {
    console.log(event);
  }
  ngAfterViewInit() {
    console.log(3);
    let previousValid = this.dynamicForm.valid;
    this.dynamicForm.changes
      .subscribe(val => {
        if (previousValid !== this.dynamicForm.valid) {
          previousValid = this.dynamicForm.valid;
          this.dynamicForm.setDisabled('submit', !previousValid);
        }
      });
    setTimeout(() => {
      this.dynamicForm.setDisabled('submit', true);
    });

  }

  changeForm(formType) {
    this.formFieldConfigs = formsPool[formType];
    this.dynamicForm.setDisabled('submit', true);
  }
}
