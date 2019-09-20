import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as ff from '@ant-design/icons-angular/icons';


import {
  SFButtonComponent,
  SFSelectComponent,
  SFRadioComponent,
  SFInputComponent,
  SFCheckboxComponent,
  SFSwitchComponent,
  SFDatePickerComponent,
  SFCommonComponent,
  SFUploadComponent,
  UploadControlComponent,
  SFSliderComponent,
  SFRateComponent,
  CheckboxGroupControlComponent,
  SFGroupComponent
  // } from './builder/index';  // error
} from 'projects/super-form/src/lib/builder/index'; // ok
//
import { SFFieldDirective } from './directives/sf-field.directive';
import { SFFormComponent } from './form.component';
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
    SFInputComponent,
    SFSelectComponent,
    SFButtonComponent,
    SFRadioComponent,
    SFCheckboxComponent,
    CheckboxGroupControlComponent,
    SFSwitchComponent,
    SFDatePickerComponent,
    SFCommonComponent,
    SFUploadComponent,
    UploadControlComponent,
    SFSliderComponent,
    SFRateComponent,
    RatingInputComponent,
    SFGroupComponent,


    SFFormComponent,
    SFFieldDirective,
  ],
  exports: [
    SFFormComponent,
  ],
  entryComponents: [
    SFInputComponent,
    SFSelectComponent,
    SFButtonComponent,
    SFCheckboxComponent,
    CheckboxGroupControlComponent,
    SFRadioComponent,
    SFSwitchComponent,
    SFDatePickerComponent,
    SFCommonComponent,
    SFUploadComponent,
    UploadControlComponent,
    SFSliderComponent,
    SFRateComponent,
    RatingInputComponent,
    SFGroupComponent,
  ],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
  ]
})
export class SFFormModule { }