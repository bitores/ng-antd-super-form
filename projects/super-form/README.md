# SuperForm

1. Angular
> npm i -S ng-antd-super-form
[在线案例](https://stackblitz.com/edit/ng-antd-super-form)

2. Vue
> npm i -S vue-antd-super-form

3. React
> npm i -S react-antd-super-form

 目前为止, 三大框架都可以使用的 super-form 基本已完成, 在保证同各版本的 antd api 属性要同的情况下, 格式基本一样, 可以相互参考各版本的文档, 有空我会再整理一个文档, 有兴趣的也可以一起参考进来

```html
<ng-antd-super-form [search]="search" [table]="table"></ng-antd-super-form>

```

```ts
search:{
  layout: string;
  data: object[];
}

table:{
  columns: object[],
  action: Function,
  isInit: boolean;
}
```

```js
data=[
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
```

```js
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
```