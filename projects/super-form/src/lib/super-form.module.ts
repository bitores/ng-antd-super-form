import { NgModule, OnChanges, OnInit, Input, ComponentRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SuperFormComponent } from './super-form.component';
import { FieldConfig } from './interface';
import { DynamicFormModule } from './dynamic-form.module';
import { DynamicTableModule } from './dynamic-table.module';




@NgModule({
  declarations: [SuperFormComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicFormModule,
    DynamicTableModule
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
