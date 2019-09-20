import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldConfig } from './interface';


@Component({
  selector: 'sf-form',
  template: `
  <form nz-form [formGroup]="form" [nzLayout]="layout">
    <ng-container *ngFor="let config of configs" sfField [config]="config" [group]="form" [formLayout]="formLayout" [autoSearchEvent]="autoSearchEvent"></ng-container>
  </form>
  `,
  styles: [
    `
    `
  ]
})
export class SFFormComponent implements OnInit, OnChanges {
  @Input() autoSearchEvent: Function;
  @Input() _bindForm: Function;

  @Input() configs: FieldConfig[];
  @Input() layout: string = 'horizontal';
  @Input() formLayout: object = {
    labelCol: 6,
    wrapperCol: 14
  };
  @Output() submit = new EventEmitter<any>();
  get controlConfigs() {
    return this.getControlConfigs(this.configs)
  }
  get value() { return this.form.value; }
  get valid() { return this.form.valid; }
  get changes(): Observable<any> { return this.form.valueChanges; }
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  getControlConfigs(configs: any = []): any {
    let ret: any = [];
    for (let index = 0; index < configs.length; index++) {
      const item = configs[index];
      if (!['button', 'buttongroup', 'br', 'divider', 'explain'].includes(item.type)) {
        if (item.type === 'group') {
          let groups = this.getControlConfigs(item.children)
          ret.push(...groups);
        } else {
          ret.push(item)
        }
      }
    }

    return ret;
  }

  ngOnInit() {
    this.layout = ['inline', 'horizontal', 'vertical'].indexOf(this.layout) > -1 ? this.layout : 'horizontal';
    this.formLayout = this.formLayout || (this.layout === 'horizontal' ? {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    } : {
        labelCol: null,
        wrapperCol: null
      });

    this.configs.map(item => {
      if (item.validations && item.validations.indexOf(Validators.required) > -1) {
        item.required = true;
      }
    })
    this.form = this.creatForm();
    this._bindForm(this.form)
  }
  ngOnChanges() {
    if (this.form) {
      const settedControls = Object.keys(this.form['controls']);
      const controlToSet = this.controlConfigs.map((item: any) => item.key);
      settedControls
        .filter(controlName => !controlToSet.includes(controlName))
        .forEach(controlName => {
          this.form.removeControl(controlName);
        });
      controlToSet
        .filter((controlName: any) => !settedControls.includes(controlName))
        .forEach((controlName: any) => {
          const config = this.controlConfigs.find((item: any) => item.key === controlName);
          this.form.addControl(controlName, this.creatControl(config));
        });
    }
  }

  creatForm(): FormGroup {
    const form = this.fb.group({});
    this.controlConfigs.forEach((item: any) => {
      form.addControl(item.key, this.creatControl(item));
    });
    return form;
  }
  creatControl(fieldConfig: FieldConfig) {
    const { disabled, initialValue = null, validations } = fieldConfig;
    if (validations && validations.indexOf(Validators.required) > -1) {
      fieldConfig.required = true;
    }

    return this.fb.control({ disabled, value: initialValue }, validations);
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.configs.forEach(item => {
      if (item.key === name) {
        item.disabled = disable;
      }
    });
  }
  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value);
  }
}
