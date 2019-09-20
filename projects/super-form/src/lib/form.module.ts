import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as ff from '@ant-design/icons-angular/icons';

import { SFButtonComponent } from './builder/button.component';
import { SFInputComponent } from './builder/input.component';
import { SFSelectComponent } from './builder/select.component';
import { SFRadioComponent } from './builder/radio.component';
import { SFCheckboxComponent, CheckboxGroupControlComponent } from './builder/checkbox.component';
import { SFDatePickerComponent } from './builder/datepicker.component';
import { SFCommonComponent } from './builder/common.component';
import { SFUploadComponent, UploadControlComponent } from './builder/upload.component';
import { SFSliderComponent } from './builder/slider.component';
import { SFGroupComponent } from './builder/group.component';
import { SFSwitchComponent } from './builder/switch.component';
import { SFRateComponent } from './builder/rate.component';



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