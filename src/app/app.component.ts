import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


import { FormComponent } from 'projects/super-form/src/lib/dynamic-form.component';
import { formsPool } from './formsPool';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicForm', { static: false })
  dynamicForm: FormComponent;

  layout = 'horizontal';
  formLayout = {
    labelCol: 6,
    wrapperCol: 14
  }
  formFieldConfigs = formsPool['data'];

  constructor(private cdr: ChangeDetectorRef) { }

  onSubmit(event) {
    console.log(event);
  }
  ngAfterViewInit() {
    console.log(3);
    let previousValid = this.dynamicForm.valid;
    this.dynamicForm.changes
      .subscribe(val => {
        if (previousValid !== this.dynamicForm.valid) {
          previousValid = this.dynamicForm.valid;
          this.dynamicForm.setDisabled('submit', !previousValid);
        }
      });
    setTimeout(() => {
      this.dynamicForm.setDisabled('submit', true);
    });

  }

  changeForm(formType) {
    this.formFieldConfigs = formsPool[formType];
    this.dynamicForm.setDisabled('submit', true);
  }
}
