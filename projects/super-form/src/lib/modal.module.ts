import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SFModalComponent } from './modal.component';
import { SFFormModule } from './form.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //
    NgZorroAntdModule,
    SFFormModule
  ],
  declarations: [
    SFModalComponent
  ],
  exports: [
    SFModalComponent,
  ]
})
export class SFModalModule { }