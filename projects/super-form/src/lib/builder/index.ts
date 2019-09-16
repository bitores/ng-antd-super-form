import { Type } from '@angular/core';


import { FormButtonComponent } from './button.component';
import { FormCheckboxComponent } from './checkbox.component';
import { FormInputComponent } from './input.component';
import { FormRadioComponent } from './radio.component';
import { FormSelectComponent } from './select.component';
import { FormSwitchComponent } from './switch.component';
import { FormDatePickerComponent } from './datepicker.component';
import { FormCommonComponent } from './common.component';
import { FormUploadComponent, UploadControlComponent } from './upload.component';
import { FormSliderComponent } from './slider.component';
import { FormRateComponent } from './rate.component';

import { FieldConfig, Field } from '../interface';


export const components: { [type: string]: Type<Field> } = {
  number: FormInputComponent,
  input: FormInputComponent,
  rating: FormInputComponent,
  textarea: FormInputComponent,
  button: FormButtonComponent,
  buttongroup: FormButtonComponent,
  select: FormSelectComponent,
  radio: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  switch: FormSwitchComponent,
  datepicker: FormDatePickerComponent,
  yearpicker: FormDatePickerComponent,
  monthpicker: FormDatePickerComponent,
  weekpicker: FormDatePickerComponent,
  rangepicker: FormDatePickerComponent,
  divider: FormCommonComponent,
  explain: FormCommonComponent,
  slider: FormSliderComponent,
  br: FormCommonComponent,
  upload: FormUploadComponent,
  rate: FormRateComponent
};

export {
  FormInputComponent,
  FormButtonComponent,
  FormSelectComponent,
  FormRadioComponent,
  FormCheckboxComponent,
  FormSwitchComponent,
  FormDatePickerComponent,
  FormCommonComponent,
  FormUploadComponent,
  UploadControlComponent,
  FormSliderComponent,
  FormRateComponent,
}