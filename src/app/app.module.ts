import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as ff from '@ant-design/icons-angular/icons';

import { DynamicFormModule } from 'projects/super-form/src/lib/dynamic-form.module';
import { SuperFormModule } from 'projects/super-form/src/public-api';
// import { SuperFormModule } from 'super-form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const icons: IconDefinition[] = Object.values(ff);
registerLocaleData(zh);

//
import { DynamicTableComponent } from 'projects/super-form/src/lib/dynamic-table.component';


@NgModule({
  declarations: [
    AppComponent,
    //
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    //
    SuperFormModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,


  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
