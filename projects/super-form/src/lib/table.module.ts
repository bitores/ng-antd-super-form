import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SFTableComponent } from './table.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //
    NgZorroAntdModule,
  ],
  declarations: [
    SFTableComponent
  ],
  exports: [
    SFTableComponent,
  ]
})
export class SFTableModule { }