import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/take';
import { FieldConfig } from './interface';
import { CheckboxValuePosterService } from './service/checkbox-value-poster.service';


@Component({
  selector: 'antd-form',
  template: `
  <form (ngSubmit)="handleSubmit($event)" [formGroup]="form" class="dynamic-form">
    <ng-container *ngFor="let config of configs" appDynamicField [config]="config" [group]="form"></ng-container>
  </form>
  `,
  styles: [
    `
    .dynamic-field {
      margin-bottom: 15px;
      label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        margin-bottom: 10px;
        color: rgba(219, 150, 150, 0.9);
      }
    }
    `
  ]
})


export class FormComponent implements OnInit, OnChanges {
  @Input()
  configs: FieldConfig[];
  @Output()
  submit = new EventEmitter<any>();
  get controlConfigs() { return this.configs.filter(item => item.type !== 'button'); }
  get value() { return this.form.value; }
  get valid() { return this.form.valid; }
  // get changes(): Observable<any> { return this.form.valueChanges; }
  form: FormGroup;


  constructor(
    private fb: FormBuilder, private service: CheckboxValuePosterService
  ) {
  }

  ngOnInit() {
    this.form = this.creatForm();

  }
  ngOnChanges() {
    console.log(1);
    if (this.form) {
      this.service.clearValue();
      const settedControls = Object.keys(this.form['controls']);
      const controlToSet = this.controlConfigs.map(item => item.name);
      settedControls
        .filter(controlName => !controlToSet.includes(controlName))
        .forEach(controlName => {
          this.form.removeControl(controlName);
        });
      controlToSet
        .filter(controlName => !settedControls.includes(controlName))
        .forEach(controlName => {
          const config = this.controlConfigs.find(item => item.name === controlName);
          this.form.addControl(controlName, this.creatControl(config));
        });
    }

  }
  creatForm(): FormGroup {
    const form = this.fb.group({});
    this.controlConfigs.forEach(config => {
      form.addControl(config.name, this.creatControl(config));
    });
    return form;
  }
  creatControl(fieldConfig: FieldConfig) {
    const { disabled, value, validations } = fieldConfig;
    return this.fb.control({ disabled, value }, validations);
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // this.service.getValue().take(1).subscribe(val => this.submit.emit({
    //   valid: this.valid,
    //   formVal: this.value,
    //   checkboxVal: val
    // }));

  }
  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.configs.forEach(item => {
      if (item.name === name) {
        item.disabled = disable;
      }
    });
  }
  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value);
  }
}
