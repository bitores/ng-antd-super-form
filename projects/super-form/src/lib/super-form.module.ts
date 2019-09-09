import { NgModule, OnChanges, OnInit, Input, ComponentRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SuperFormComponent } from './super-form.component';
import { FormComponent } from './antd-form.component';
import { DynamicFieldDirective } from './builder/dynamic-field.directive';




@NgModule({
  declarations: [SuperFormComponent, FormComponent, DynamicFieldDirective],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    // { provide: NZ_I18N, useValue: zh_CN },

  ],
  exports: [SuperFormComponent, FormComponent]
})
export class SuperFormModule implements OnChanges, OnInit {

  @Input()
  config: any;

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
