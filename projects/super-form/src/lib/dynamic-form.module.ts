import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as ff from '@ant-design/icons-angular/icons';


import {
  FormButtonComponent,
  FormSelectComponent,
  FormRadioComponent,
  FormInputComponent,
  FormCheckboxComponent,
  FormSwitchComponent,
  FormDatePickerComponent,
  FormCommonComponent,
  FormUploadComponent,
  UploadControlComponent,
  FormSliderComponent,
  FormRateComponent,
  CheckboxGroupControlComponent
  // } from './builder/index';  // error
} from 'projects/super-form/src/lib/builder/index'; // ok
//
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { RatingInputComponent } from './builder/rating-input.component';

// const icons: IconDefinition[] = Object.values(ff);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    CheckboxGroupControlComponent,
    FormSwitchComponent,
    FormDatePickerComponent,
    FormCommonComponent,
    FormUploadComponent,
    UploadControlComponent,
    FormSliderComponent,
    FormRateComponent,
    RatingInputComponent,


    DynamicFormComponent,
    DynamicFieldDirective,
  ],
  exports: [
    DynamicFormComponent,
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    CheckboxGroupControlComponent,
    FormRadioComponent,
    FormSwitchComponent,
    FormDatePickerComponent,
    FormCommonComponent,
    FormUploadComponent,
    UploadControlComponent,
    FormSliderComponent,
    FormRateComponent,
    RatingInputComponent,
  ],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
  ]
})
export class DynamicFormModule { }