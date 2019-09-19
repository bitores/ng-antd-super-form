import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FieldConfig, FormLayout } from '../interface';

interface Option {
  label: string,
  value: any
}

@Component({
  selector: 'checkbox-group-control',
  template: `
  <nz-checkbox-group [(ngModel)]="options" [ngStyle]="config.style" (ngModelChange)="handleEvent($event, changeValue)"></nz-checkbox-group>
  `,
  styles: [``],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupControlComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupControlComponent implements ControlValueAccessor {


  @Input() config: FieldConfig;
  @Input() disabled: boolean = false;

  options: object[] = [];

  value: number[] = [];

  // Function to call when the rating changes.
  onChange = (value: number[]) => {
  };

  changeValue = (value: number[]) => {
    this.value = value;
    this.onChange(this.value);
  }

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(value: number[]): void {
    this.options = this.config.options.map((item: Option) => {
      return {
        label: item.label,
        value: item.value,
        checked: value && value.indexOf(item.value) > -1
      }
    });

    this.value = value || [];
    if (value) {
      // 避免重置时调用
      this.onChange(this.value)
    }
  }


  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (value: number[]) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  handleEvent = (e: any, callback?: Function) => {
    callback && callback(e.reduce((pre: any, item: any) => {
      if (item.checked) {
        pre.push(item.value)
      }
      return pre;
    }, []))
  }
}

@Component({
  selector: 'sf-checkbox',
  template: `
  <nz-form-item [formGroup]="group" *ngIf="config.visible!==false">
    <nz-form-label *ngIf="config.label" [nzSm]="formLayout.labelCol" [nzRequired]="config.required" [nzNoColon]="config.noColon">{{config.label}}</nz-form-label>
    <nz-form-control [nzSm]="formLayout.wrapperCol" [nzExtra]="config.extra" [nzHasFeedback]="config.hasFeedback" [nzSuccessTip]="config.successTip" [nzWarningTip]="config.warningTip" [nzErrorTip]="config.errorTip" [nzValidatingTip]="config.validatingTip">
      <checkbox-group-control  
        [formControlName]="config.key" 
        [config]="config"
      ></checkbox-group-control>
      <div nz-form-explain>{{config.explain}}</div>
    </nz-form-control>
  </nz-form-item>
  `,
  styles: [
    `
    `
  ]
})
export class SFCheckboxComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  formLayout: FormLayout;

  ngOnInit() {
    // console.log('??', this.group.controls[this.config.key])
    // 自定义验证器: 至少一个选项
    // (control) => {
    //   if (control.value) {
    //     let ret = control.value.filter(item => item.checked)
    //     if (ret.length < 1) {
    //       return {
    //         valid: false
    //       }
    //     }
    //     return null;
    //   }
    //   return null;
    // }

    this.formLayout = {
      ...this.formLayout,
      ...this.config.formLayout
    }
    let config = this.config;
    this.config = {
      noColon: false,
      ...config
    }
  }
}