
import { ValidatorFn, FormGroup } from '@angular/forms';

enum BUTTONTYPE { default = 'default', primary = 'primary', dashed = 'dashed', danger = 'danger', link = 'link' };

export interface FieldConfig {
  key: string;
  validations?: ValidatorFn[];
  value?: any;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  type: string;
  label?: string;
  options?: object[];
  successTip?: string;
  warningTip?: string;
  errorTip?: string;
  validatingTip?: string;
  hasFeedback?: boolean;
  visible?: boolean;
  // buttonType?: BUTTONTYPE;
  [props: string]: any;
}

export interface Field {
  group: FormGroup;
  config: FieldConfig;
  formLayout: object;
}