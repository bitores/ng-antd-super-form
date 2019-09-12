import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th *ngFor="let t of columns">{{t.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of basicTable.data">
          <td  *ngFor="let t of columns">{{ row[t.dataIndex] }}</td>
                    
          <td>
            <a>Action 一 {{ row.name }}</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class DynamicTableComponent {
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: () => { }
    },
  ]
  listOfData = [
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
}