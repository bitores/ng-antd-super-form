import { Type } from '@angular/core';


import { FormButtonComponent } from './button.component';
import { FormCheckboxComponent } from './checkbox.component';
import { FormInputComponent } from './input.component';
import { FormRadioComponent } from './radio.component';
import { FormSelectComponent } from './select.component';
import { FormSwitchComponent } from './switch.component';
import { FormDatePickerComponent } from './datepicker.component';
import { FormCommonComponent } from './common.component';
import { FormUploadComponent } from './upload.component';

import { FieldConfig, Field } from '../interface';


export const components: { [type: string]: Type<Field> } = {
  number: FormInputComponent,
  input: FormInputComponent,
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
  br: FormCommonComponent,
  upload: FormUploadComponent,
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
}