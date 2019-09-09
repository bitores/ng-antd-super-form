import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { SuperFormModule } from 'projects/super-form/src/public-api';
// import { SuperFormModule } from 'super-form';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as ff from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = Object.values(ff);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormButtonComponent } from 'projects/super-form/src/lib/builder/button.component';
import { FormCheckboxComponent } from 'projects/super-form/src/lib/builder/checkbox.component';
import { FormInputComponent } from 'projects/super-form/src/lib/builder/input.component';
import { FormRadioComponent } from 'projects/super-form/src/lib/builder/radio.component';
import { FormSelectComponent } from 'projects/super-form/src/lib/builder/select.component';
import { DynamicFieldDirective } from 'projects/super-form/src/lib/builder/dynamic-field.directive';
import { CheckboxValuePosterService } from 'projects/super-form/src/lib/service/checkbox-value-poster.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FormGroup } from '@angular/forms';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent,
  ],
  entryComponents: [
    FormButtonComponent,
    FormCheckboxComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent
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
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
    CheckboxValuePosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
