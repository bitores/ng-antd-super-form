import { Type } from '@angular/core';


import { SFButtonComponent } from './button.component';
import { SFCheckboxComponent, CheckboxGroupControlComponent } from './checkbox.component';
import { SFInputComponent } from './input.component';
import { SFRadioComponent } from './radio.component';
import { SFSelectComponent } from './select.component';
import { SFSwitchComponent } from './switch.component';
import { SFDatePickerComponent } from './datepicker.component';
import { SFCommonComponent } from './common.component';
import { SFUploadComponent, UploadControlComponent } from './upload.component';
import { SFSliderComponent } from './slider.component';
import { SFRateComponent } from './rate.component';

import { Field } from '../interface';
import { SFGroupComponent } from './group.component';


export const components: { [type: string]: Type<Field> } = {
  number: SFInputComponent,
  hidden: SFInputComponent,
  input: SFInputComponent,
  rating: SFInputComponent,
  textarea: SFInputComponent,
  button: SFButtonComponent,
  buttongroup: SFButtonComponent,
  select: SFSelectComponent,
  radio: SFRadioComponent,
  checkbox: SFCheckboxComponent,
  switch: SFSwitchComponent,
  datepicker: SFDatePickerComponent,
  yearpicker: SFDatePickerComponent,
  monthpicker: SFDatePickerComponent,
  weekpicker: SFDatePickerComponent,
  rangepicker: SFDatePickerComponent,
  divider: SFCommonComponent,
  explain: SFCommonComponent,
  slider: SFSliderComponent,
  br: SFCommonComponent,
  upload: SFUploadComponent,
  rate: SFRateComponent,
  group: SFGroupComponent
};

export {
  SFInputComponent,
  SFButtonComponent,
  SFSelectComponent,
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
  SFGroupComponent,
}