import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as ff from '@ant-design/icons-angular/icons';

// 开发调试用
import { SuperFormModule, SFModalModule } from 'projects/super-form/src/public-api';
// 需要编译后使用
// import { SuperFormModule } from 'super-form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const icons: IconDefinition[] = Object.values(ff);
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    //
    SuperFormModule,
    SFModalModule,
    // DynamicFormModule,
    // DynamicTableModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
