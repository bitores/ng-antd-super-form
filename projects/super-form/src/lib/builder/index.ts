import { Type } from '@angular/core';


import { FormButtonComponent } from './button.component';
import { FormCheckboxComponent } from './checkbox.component';
import { FormInputComponent } from './input.component';
import { FormRadioComponent } from './radio.component';
import { FormSelectComponent } from './select.component';

import { FieldConfig, Field } from '../interface';


export const components: { [type: string]: Type<Field> } = {
  input: FormInputComponent,
  button: FormButtonComponent,
  select: FormSelectComponent,
  radio: FormRadioComponent,
  checkbox: FormCheckboxComponent
};

export {
  FormInputComponent,
  FormButtonComponent,
  FormSelectComponent,
  FormRadioComponent,
  FormCheckboxComponent
}