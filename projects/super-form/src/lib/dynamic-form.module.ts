import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as ff from '@ant-design/icons-angular/icons';


import { FormButtonComponent, FormSelectComponent, FormRadioComponent, FormInputComponent, FormCheckboxComponent } from './builder/index';
import { CheckboxValuePosterService } from './service/checkbox-value-poster.service';
//
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormComponent } from './dynamic-form.component';

// const icons: IconDefinition[] = Object.values(ff);

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //
    NgZorroAntdModule,
  ],
  declarations: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormComponent,
    DynamicFieldDirective,
  ],
  exports: [
    FormComponent,
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
    CheckboxValuePosterService
  ]
})
export class DynamicFormModule { }