import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


import { FormComponent } from 'projects/super-form/src/lib/dynamic-form.component';
import { formsPool } from './formsPool';

import api from './api/service';
import { _time } from './utils';

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

  //table
  config = {
    showTotal: true,
    current: 3,
    pageSize: 7,
    // showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: [5, 10, 20],
    // title: 'Header',
    // footer: 'Footer',
    // // loading: true,
  }

  columns = [
    {
      title: '活动ID',
      dataIndex: 'activityId',
      key: 'activityId',
    },
    {
      title: '活动类型',
      dataIndex: 'activityType',
      key: 'activityType',
      render: text => {
        switch (text) {
          case 1:
            return '直播活动'
            break;
          case 2:
            return '普通活动'
            break;
          case 3:
            return '免单活动'
            break;

          default:
            return '--'
            break;
        }
      },
    },
    {
      title: '活动标题',
      dataIndex: 'activityName',
      key: 'activityName',
    },
    {
      title: '活动状态',
      dataIndex: 'activityStatus',
      key: 'activityStatus',
      render: text => {
        switch (text) {
          case 1:
            return '未开始'
            break;
          case 2:
            return '进行中'
            break;
          case 3:
            return '已结束'
            break;

          default:
            return '--'
            break;
        };
      },
    },
    {
      title: '上线状态',
      dataIndex: 'activeState',
      key: 'activeState',
      render: text => {
        return text ? '未上线' : '上线中';
      },
    },
    {
      title: '创建时间',
      dataIndex: 'gmtCreated',
      key: 'gmtCreated',
      sorter: true,
      render: text => (text ? _time(text) : '--'),
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: true,
      render: text => (text ? _time(text) : '--'),
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
      sorter: true,
      render: text => (text ? _time(text) : '--'),
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
  dataSource = [];

  constructor(private cdr: ChangeDetectorRef) { }

  queryList(parms) {
    return api.queryList(parms);
  }

  ngAfterViewInit() {
    // let previousValid = this.dynamicForm.valid;
    // this.dynamicForm.changes
    //   .subscribe(val => {
    //     if (previousValid !== this.dynamicForm.valid) {
    //       previousValid = this.dynamicForm.valid;
    //       this.dynamicForm.setDisabled('submit', !previousValid);
    //     }
    //   });
    // setTimeout(() => {
    //   this.dynamicForm.setDisabled('submit', true);
    // });
    // api.queryList({
    //   page: 1,
    //   pageSize: 5
    // }).then(res => {
    //   console.log(res)
    //   if (res.status) {
    //     this.dataSource = res.entry || [];
    //   }

    // })
  }

  // changeForm(formType) {
  //   this.formFieldConfigs = formsPool[formType];
  //   this.dynamicForm.setDisabled('submit', true);
  // }
}
