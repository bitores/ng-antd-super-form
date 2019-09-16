import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  template: `
    <nz-table #basicTable 
      [nzData]="dataSource"
      [nzScroll]="fixHeader ? { y: '240px' } : null"
      [nzBordered]="bordered"
      [nzSimple]="simple"
      [nzLoading]="loading"
      [nzPaginationPosition]="position"
      [nzShowSizeChanger]="sizeChanger"
      [nzFrontPagination]="pagination"
      [nzShowPagination]="pagination"
      [nzTotal]="total"
      [(nzPageIndex)]="pageIndex"
      [(nzPageSize)]="pageSize"
      (nzPageIndexChange)="searchData()"
      (nzPageSizeChange)="searchData(true)"
      [nzFooter]="footer ? 'Here is Footer' : null"
      [nzTitle]="title ? 'Here is Title' : null"
      [nzSize]="size"
      >
      <thead>
        <tr>
          <th *ngFor="let t of columns" [nzWidth]="t.width" [nzSort]="t.sort||null" [nzSortKey]="t.sortKey" [nzShowSort]="t.showSort">{{t.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of basicTable.data">
          <ng-container *ngFor="let t of columns" [ngSwitch]="t.dataIndex">
            <td *ngSwitchCase="'action'" >
              <ng-container *ngFor="let child of t.children; let i=index">
                <a nz-popconfirm 
                  [nzPopconfirmTitle]="child.popconfirmTitle||'确认操作?'" 
                  nzIcon="question-circle-o"
                  (nzOnConfirm)="child.click($event, row)"
                  *ngIf="child.popconfirm;else noPopconfirm"
              >{{child.title}}</a>
              <ng-template #noPopconfirm>
                <a (click)="child.click($event, row)">{{child.title}}</a>
              </ng-template>
                
                <nz-divider nzType="vertical" *ngIf="t.children.length!==(i+1)"></nz-divider>
              </ng-container>
            </td>
            <td *ngSwitchDefault>{{t.render?t.render(row[t.dataIndex], row):row[t.dataIndex]}}</td>  
           </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class DynamicTableComponent implements OnInit {
  @Input() columns: object[];
  @Input() dataSource: object[];
  bordered = false;
  loading = false;
  sizeChanger = false;
  pagination = true;
  pageIndex = 1;
  pageSize = 1;
  header = false;
  title = false;
  footer = false;
  fixHeader = false;
  size = 'large';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  displayData: any[] = [];
  simple = false;
  noResult = false;
  position = 'bottom';

  ngOnInit() {

  }

  searchData() { }


}