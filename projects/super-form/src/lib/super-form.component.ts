import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ng-antd-super-form',
  templateUrl: './super-form.component.html',
  styles: [
    `
    .super-form-formstyle, .super-form-tablestyle{
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    `
  ]
})
export class SuperFormComponent implements OnInit {
  @Input() search: object = {
    data: []
  };
  @Input() table: object = {};

  @Input() formStyle: object = {};
  @Input() tableStyle: object = {};




  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
}
