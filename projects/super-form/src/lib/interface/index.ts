
import { ValidatorFn, FormGroup } from '@angular/forms';

export interface FormLayout {
  labelCol?: object;
  wrapperCol?: object;
}

export interface FieldConfig {
  key: string;
  validations?: ValidatorFn[];
  initialValue?: any;
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
  [props: string]: any;
}

export interface Field {
  group: FormGroup;
  config: FieldConfig;
  formLayout?: FormLayout;
  autoSearchEvent?: Function;
}

export interface TableField {
  columns: object[];
  dataSource: object[];
}