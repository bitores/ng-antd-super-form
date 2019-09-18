import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, FormLayout } from '../interface';
@Component({
  selector: 'app-form-button',
  template: `
  <nz-form-item  *ngIf="config.visible!==false">
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [ngSwitch]="config.type">
      <button *ngSwitchCase="'button'" nz-button (click)="onClick($event)" [nzType]="config.nzType" [nzGhost]="config.ghost" [nzShape]="config.shape" [nzSize]="config.size" [nzLoading]="config.loading" [nzBlock]="config.block" [disabled]="config.disabled"><i nz-icon [nzType]="config.icon" *ngIf="config.icon!=undefined"></i>{{config.label}}<i nz-icon [nzType]="config.rightIcon" *ngIf="config.rightIcon!=undefined"></i></button>
      <nz-button-group *ngSwitchCase="'buttongroup'">
        <button *ngFor="let child of config.children" nz-button (click)="handleEvent($event, child.onClick)" [nzType]="child.nzType" [nzGhost]="child.ghost" [nzShape]="child.shape" [nzSize]="child.size" [nzLoading]="child.loading" [nzBlock]="child.block" [disabled]="child.disabled"><i nz-icon [nzType]="child.icon" *ngIf="child.icon!=undefined"></i>{{child.label}}<i nz-icon [nzType]="child.rightIcon" *ngIf="child.rightIcon!=undefined"></i></button>
      </nz-button-group>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class FormButtonComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: FormLayout;
  autoSearchEvent: Function;

  ngOnInit() {
    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }

    let config = this.config;

    this.config = {
      bindSearch: false,
      ...config,
    }
  }

  onClick(e: any) {
    let callback = this.config.onClick;
    if (this.config.bindSearch) {
      for (const i in this.group.controls) {
        this.group.controls[i].markAsDirty();
        this.group.controls[i].updateValueAndValidity();
      }
      callback && callback(e, this.group)
      this.autoSearchEvent();
    } else {
      callback && callback(e, this.group)
    }
  }

  handleEvent(e: any, callback?: Function) {
    callback && callback(e)
  }
}