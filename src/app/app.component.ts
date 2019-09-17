import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


// import { DynamicFormComponent } from 'projects/super-form/src/lib/dynamic-form.component';
import { formsPool } from './formsPool';

import api from './api/service';
import { _time } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('dynamicForm', { static: false })
  // dynamicForm: DynamicFormComponent;

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
    // showCheckbox: true,
    // title: 'Header',
    // footer: 'Footer',
    // // loading: true,
  }

  columns = [
    // {
    //   showCheckbox: true,
    //   checked: true,
    //   indeterminate: true,
    // },
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
      width: '150px',
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

  search = {}
  table = {}

  constructor(private cdr: ChangeDetectorRef) {
    this.search = {
      layout: 'inline',
      data: [
        {
          label: '活动标题',
          type: 'input',
          key: 'activityName',
          placeholder: '请输入关键字查询',
          style: {
            width: '100px'
          }
        },
        {
          label: '活动类型',
          type: 'select',
          initialValue: '',
          options: [
            { label: '全部', value: '' },
            { label: '直播活动', value: 1 },
            { label: '普通活动', value: 2 },
            { label: '免单活动', value: 3 },
          ],
          key: 'activityType',
          style: {
            width: '100px'
          }
        },
        {
          label: '活动状态',
          type: 'select',
          initialValue: '',
          options: [
            { label: '全部', value: '' },
            { label: '未开始', value: 1 },
            { label: '进行中', value: 2 },
            { label: '已结束', value: 3 },
          ],
          key: 'activityStatus',
          style: {
            width: '100px'
          }
        },
        {
          label: '时间类型',
          type: 'select',
          options: [
            { label: '创建时间', value: 'gmtCreated' },
            { label: '开始时间', value: 'startTime' },
            { label: '结束时间', value: 'endTime' },
          ],
          key: 'activityTime',
          initialValue: 'startTime',
          style: {
            width: '100px'
          }
        },
        {
          type: 'rangepicker',
          key: ',releaseTime',
          dateFormat: 'YYYY-MM-DD',
          onChange: (date, form) => {
            form.controls['startTime'].setValue(_time(date[0], "YYYY-MM-DD"))
            form.controls['endTime'].setValue(_time(date[1], "YYYY-MM-DD"))
          },
        },
        {
          type: 'hidden',
          key: 'startTime'
        },
        {
          type: 'hidden',
          key: 'endTime'
        },
        {
          label: '搜索',
          key: 'submit',
          type: 'button',
          disabled: false,
          nzType: 'primary',
          icon: 'search',
          bindSearch: true,
          onClick: (e, form) => {
            console.log(e, form)
          }
        },
      ]
    }

    this.table = {
      columns: this.columns,
      action: this.queryList,
      isInit: true
    }
  }

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
