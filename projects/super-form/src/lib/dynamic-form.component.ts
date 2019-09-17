import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldConfig } from './interface';


@Component({
  selector: 'dynamic-form',
  template: `
  <form nz-form (ngSubmit)="handleSubmit($event)" [formGroup]="form" [nzLayout]="layout" class="dynamic-form">
    <ng-container *ngFor="let config of configs" appDynamicField [config]="config" [group]="form" [formLayout]="formLayout"></ng-container>
  </form>
  `,
  styles: [
    `
    `
  ]
})


export class FormComponent implements OnInit, OnChanges {
  @Input()
  configs: FieldConfig[];
  @Input()
  layout: string = 'horizontal';
  @Input()
  formLayout: object = {
    labelCol: 6,
    wrapperCol: 14
  };
  @Output()
  submit = new EventEmitter<any>();
  get controlConfigs() {
    return this.configs.filter(item => !['button', 'buttongroup', 'br', 'divider', 'explain'].includes(item.type));
  }
  get value() { return this.form.value; }
  get valid() { return this.form.valid; }
  get changes(): Observable<any> { return this.form.valueChanges; }
  form: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }
  ngOnChanges() {
    if (this.form) {
      const settedControls = Object.keys(this.form['controls']);
      const controlToSet = this.controlConfigs.map(item => item.key);
      settedControls
        .filter(controlName => !controlToSet.includes(controlName))
        .forEach(controlName => {
          this.form.removeControl(controlName);
        });
      controlToSet
        .filter(controlName => !settedControls.includes(controlName))
        .forEach(controlName => {
          const config = this.controlConfigs.find(item => item.key === controlName);
          this.form.addControl(controlName, this.creatControl(config));
        });
    }
  }
  creatForm(): FormGroup {
    const form = this.fb.group({});
    this.controlConfigs.forEach(item => {
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
