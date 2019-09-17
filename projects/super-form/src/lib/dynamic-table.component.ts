import { Component, Input, OnInit } from '@angular/core';

const DEFAULT_PAGE_SIZE = 5;

@Component({
  selector: 'dynamic-table',
  template: `
    <nz-table #basicTable 
      [nzScroll]="config.fixHeader ? { y: '240px' } : null"
      [nzBordered]="config.bordered"
      [nzSimple]="config.simple"
      
      [nzFooter]="config.footer ? config.footer : null"
      [nzTitle]="config.title ? config.title : null"
      [nzSize]="config.size"

      [nzShowPagination]="config.showPagination"
      [nzPaginationPosition]="config.paginationPosition"
      [nzShowSizeChanger]="config.showSizeChanger"
      [nzFrontPagination]="config.frontPagination"
      [nzPageSizeOptions]="config.pageSizeOptions"
      [nzShowQuickJumper]="config.showQuickJumper"
      [nzShowTotal]="config.showTotal?showTotal:null"
      
      [nzTotal]="_total"
      [nzData]="_list"
      [nzPageIndex]="_current"
      [nzPageSize]="_pageSize"
      [nzLoading]="config.loading&&_loading"
      (nzPageIndexChange)="handleEvent($event, _pageIndexChange)"
      (nzPageSizeChange)="handleEvent($event, _pageSizeChange)"
    >
      <thead>
        <tr>
          <th *ngFor="let t of columns" 
            [nzWidth]="t.width" 
            [nzShowCheckbox]="t.showCheckbox"
            [nzIndeterminate]="t.indeterminate"
            [nzChecked]="t.checked"
            (nzCheckedChange)="handleEvent($event, t.checkedChange)"
            [nzSort]="t.sort||null" 
            [nzSortKey]="t.sortKey" 
            [nzShowSort]="t.showSort"
            (nzSortChange)="handleEvent($event, t.sortChange)"
          >
          {{t.title}}
        </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of basicTable.data">
          <td nzShowCheckbox *ngIf="config.showCheckbox" (nzCheckedChange)="handleEvent($event, null)"></td>
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
    <ng-template #showTotal let-range="range" let-total>
      {{ range[0] }}-{{ range[1] }} 条, 共 {{ total }} 条
    </ng-template>
  `
})
export class DynamicTableComponent implements OnInit {
  @Input() action: Function;
  @Input() params: Function;
  @Input() extraParams: () => object | object;
  @Input() pageName: string;
  @Input() pageSizeName: string;
  @Input() valueMap: Function;
  @Input() actionError: Function;
  @Input() isInit: boolean;

  @Input() columns: object[];
  @Input() dataSource: object[];
  @Input() config: object;

  //
  _loading: boolean = false;
  _list: object[] = [];
  _total: number = 0;
  _current: number = 1;
  _pageSize: number = DEFAULT_PAGE_SIZE;
  //


  _init(config, isInit = false) {
    const { current = 1, pageSize = DEFAULT_PAGE_SIZE, dataSource, total = 0 } = config;

    this._list = dataSource;
    this._total = total;
    this._current = current;
    this._pageSize = pageSize;

    // 初始化 是否要求加载数据
    isInit && this._loadData();
  }

  reset(needLoad = true) {
    this._init(this.config, needLoad)
  }

  // 刷新 当前状态下进行数据加载
  refresh() {
    this._loadData();
  }

  // 换页 改变状态下进行数据加载
  _pageIndexChange = (_current = 1) => {
    this._current = _current;
    this._loadData();
  }

  // 换页 改变状态下进行数据加载
  _pageSizeChange = (_pageSize = DEFAULT_PAGE_SIZE) => {
    this._pageSize = _pageSize;
    this._loadData();
  }

  _loadData() {
    const {
      action,
      pageName = "page",
      pageSizeName = "pageSize",
      valueMap = (res) => {
        return {
          status: res.status,
          dataSource: res.entry,
          total: res.totalRecordSize
        }
      },
      actionError = (msg) => console.error(msg),
      params = () => ({}),
      extraParams = () => ({}),
      _current,
      _pageSize
    } = this;

    let _val = toString.call(extraParams) === "[object Function]" ? extraParams() : extraParams;

    let values = {
      // 获取外部搜索参数
      ..._val,
      // 获取内部搜索参数,
      ...params(),
      [pageName]: _current,
      [pageSizeName]: _pageSize
    }

    // return;
    let request = null;
    if (action) {
      request = action(values);
    } else {
      throw new Error('need action filed')
    }
    this._loading = true;
    request.then(res => {
      const { dataSource, total, status } = valueMap(res);
      if (status) {
        this._list = dataSource;
        this._total = total;
      } else {
        actionError(res.message)
      }
      this._loading = false;
    })

  }

  ngOnInit() {

    let config = this.config;
    this.config = {
      bordered: false,
      loading: false,
      header: false,
      title: false,
      footer: false,
      fixHeader: false,
      size: 'default',

      expandable: true,
      checkbox: true,
      allChecked: false,
      indeterminate: false,
      simple: false,
      noResult: false,


      showPagination: true,
      paginationPosition: 'bottom',
      showSizeChanger: false,
      frontPagination: false,
      pageSizeOptions: [10, 20, 30, 40, 50],
      showQuickJumper: false,
      showTotal: null,

      ...config
    }

    this._init(this.config, this.isInit)
  }

  // ngAfterViewInit(): void {
  //   console.log('table after view init')

  // }

  handleEvent(e, callback) {
    callback && callback(e)
  }
}