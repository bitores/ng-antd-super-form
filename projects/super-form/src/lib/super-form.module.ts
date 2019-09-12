import { NgModule, OnChanges, OnInit, Input, ComponentRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SuperFormComponent } from './super-form.component';
import { FormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FieldConfig } from './interface';




@NgModule({
  declarations: [SuperFormComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    // { provide: NZ_I18N, useValue: zh_CN },

  ],
  exports: [SuperFormComponent]
})
export class SuperFormModule implements OnChanges, OnInit {

  @Input()
  config: FieldConfig[];

  @Input()
  group: FormGroup;
  // component: ComponentRef<Field>

  constructor() {

  }

  ngOnChanges() {
    console.log('changes ...')
  }

  ngOnInit() {
    console.log('init ...')
  }

}
