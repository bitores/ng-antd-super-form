import { NgModule, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SuperFormComponent } from './super-form.component';
import { FieldConfig } from './interface';
import { SFFormModule } from './form.module';
import { SFTableModule } from './table.module';




@NgModule({
  declarations: [SuperFormComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SFFormModule,
    SFTableModule
  ],
  providers: [
    // { provide: NZ_I18N, useValue: zh_CN },

  ],
  exports: [SuperFormComponent]
})
export class SuperFormModule {
  @Input() config: FieldConfig[];
  @Input() group: FormGroup;
}
