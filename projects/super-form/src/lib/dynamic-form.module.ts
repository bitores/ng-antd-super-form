import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as ff from '@ant-design/icons-angular/icons';


import { FormButtonComponent, FormSelectComponent, FormRadioComponent, FormInputComponent, FormCheckboxComponent, FormSwitchComponent, FormDatePickerComponent, FormCommonComponent, FormUploadComponent, FormSliderComponent, FormRateComponent } from './builder/index';
//
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormComponent } from './dynamic-form.component';
import { UploadValueAccessor } from './directives/upload-control.directive';
import { RatingInputComponent } from './builder/rating-input.component';

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
    FormSwitchComponent,
    FormDatePickerComponent,
    FormCommonComponent,
    FormUploadComponent,
    FormSliderComponent,
    FormRateComponent,
    RatingInputComponent,


    FormComponent,
    DynamicFieldDirective,
    UploadValueAccessor
  ],
  exports: [
    FormComponent,
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormSwitchComponent,
    FormDatePickerComponent,
    FormCommonComponent,
    FormUploadComponent,
    FormSliderComponent,
    FormRateComponent,
    RatingInputComponent,
  ],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
  ]
})
export class DynamicFormModule { }